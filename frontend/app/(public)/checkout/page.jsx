import Link from "next/link";
import CheckOut from "../checkout/checkOut"; // Client component

export const metadata = {
  title: "Checkout | Stellar Structures Limited",
  description: "Securely complete your property booking and payment at Stellar Structures Limited.",
};

export default function CartPage() {
  return (
    <div className="ps-page--simple">
      <div className="ps-breadcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>Check Out</li>
          </ul>
        </div>
      </div>
      <div className="ps-section--shopping ps-shopping-cart">
        <div className="container">
          <CheckOut /> {/* Client component */}
        </div>
      </div>
    </div>
  );
}
