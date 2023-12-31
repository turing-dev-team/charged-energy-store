"use client"
import { MdClose } from "react-icons/md"
import CartItem from "./CartItem"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { useCart } from "../context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function CartModal({
  showCart,
  setShowCart,
  totalCartItems,
}: {
  showCart: boolean
  setShowCart: Dispatch<SetStateAction<boolean>>
  totalCartItems: number
}) {
  const { cart } = useCart()
  const router = useRouter()
  const cartModalRef = useRef<HTMLDivElement>(null)
  const modalOverlayRef = useRef<HTMLDivElement>(null)
  const path = usePathname()

  // Close modal wehn navigating between pages
  useEffect(() => {
    // only close modal when the modal is opened
    if (!showCart) return
    setShowCart(false)
  }, [path]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // disable scroll when modal is opened
    document.body.classList.toggle("overflow-hidden")

    // only add the event listener when the modal is opened
    if (!showCart) return

    const modalOverlay = modalOverlayRef.current

    function handleClick(event: MouseEvent) {
      if (
        cartModalRef.current &&
        !cartModalRef.current.contains(event.target as Node)
      ) {
        setShowCart(!showCart)
      }
    }

    modalOverlay?.addEventListener("click", handleClick)
    // clean up
    return () => modalOverlay?.removeEventListener("click", handleClick)
  }, [showCart, setShowCart])

  return (
    <>
      <div
        ref={modalOverlayRef}
        className={`fixed top-0 left-0 flex items-center justify-center overflow-hidden bg-black/70 px-8 z-50 ${
          showCart ? "w-screen h-screen" : "delay-200 w-0 h-0"
        }`}
      >
        <div
          ref={cartModalRef}
          className={`w-full max-w-4xl p-4 space-y-8 backdrop-blur-xl rounded border border-primary-200 text-primary-100 transition-all ease-in-out duration-300 ${
            showCart
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-100"
          }`}
        >
          <button onClick={() => setShowCart(false)} className="block ml-auto">
            <MdClose className="duration-300 hover:rotate-180 w-8 h-8 md:w-10 md:h-10" />
          </button>
          {/* cart items */}
          <div className="overflow-auto scrollbar-style">
            {cart?.lines ? (
              <ul className="max-h-[300px] px-4">
                {cart.lines.map((item, index) => (
                  <li
                    key={item.id}
                    className={`${
                      index !== cart.lines.length - 1 && "border-b"
                    } border-secondary-700`}
                  >
                    <CartItem lineItem={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center gap-8">
                <p className="text-xl md:text-2xl">Your cart is empty!</p>
                <Link
                  onClick={() => setShowCart(false)}
                  href="/products"
                  className="action-btn-style"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
          {/* total */}
          <div className="space-y-4 py-4 border-t border-secondary-400 text-sm md:text-lg">
            <p className="flex justify-between">
              <span className="uppercase">Subtotal</span>
              <span>
                {formatPrice(cart?.cost.amount, cart?.cost.currencyCode)}
              </span>
            </p>
          </div>

          {/* Checkout btn */}
          <button
            disabled={cart?.lines.length === 0}
            className="action-btn-style w-full"
            onClick={() => {
              if (!cart?.checkoutUrl) {
                throw new Error("Could not find Checkout URL!")
              }
              router.push(cart.checkoutUrl)
            }}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  )
}
