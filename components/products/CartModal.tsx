import { MdClose } from "react-icons/md"
import CartItem from "./CartItem"
import { Dispatch, SetStateAction } from "react"
import Link from "next/link"

export default function CartModal({
  showCart,
  setShowCart,
}: {
  showCart: boolean
  setShowCart: Dispatch<SetStateAction<boolean>>
}) {
  const cartItems: number[] = []

  // TODO: Close model when outside clicked
  // const cartModalRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   // only add the event listener when the modal is opened
  //   // if (!showCart) return
  //   console.log("show cart", showCart)

  //   function handleClick(event: MouseEvent) {
  //     console.log(cartModalRef.current?.contains(event.target))
  //     if (
  //       cartModalRef.current &&
  //       !cartModalRef.current.contains(event.target as Node)
  //     ) {
  //       setShowCart(!showCart)
  //     }
  //   }
  //   window.addEventListener("click", handleClick)
  //   // clean up
  //   return () => window.removeEventListener("click", handleClick)
  // }, [showCart, setShowCart])

  return (
    <>
      {showCart && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70 px-8 z-50">
          <div
            // ref={cartModalRef}
            className="w-full max-w-4xl p-4 space-y-8 backdrop-blur-xl rounded border border-primary-200 text-primary-100"
          >
            <button
              onClick={() => setShowCart(false)}
              className="block ml-auto"
            >
              <MdClose className="duration-300 hover:rotate-180 w-8 h-8 md:w-10 md:h-10" />
            </button>
            {/* cart items */}
            <div className="overflow-auto scrollbar-style">
              {cartItems.length > 0 ? (
                <ul className="max-h-[300px] px-4">
                  {cartItems.map((item, index) => (
                    <li
                      key={item}
                      className={`${
                        index !== cartItems.length - 1 && "border-b"
                      } border-secondary-700`}
                    >
                      <CartItem />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center gap-8">
                  <p className="text-xl md:text-2xl">Your cart is empty!</p>
                  <Link href="/products" className="action-btn-style">
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>
            {/* total */}
            <div className="space-y-4 py-4 border-t border-secondary-400 text-sm md:text-lg">
              <p className="flex justify-between">
                <span className="uppercase">Subtotal</span>
                <span>$9.99</span>
              </p>

              <p className="flex justify-between uppercase ">
                <span>Shipping</span>
                <span>Free</span>
              </p>
            </div>

            {/* Checkout btn */}
            <button
              disabled={cartItems.length === 0}
              className="action-btn-style w-full"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </>
  )
}
