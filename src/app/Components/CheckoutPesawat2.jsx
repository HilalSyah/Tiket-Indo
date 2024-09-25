import React, {useState} from "react";
import { productPesawat } from "../lib/Lion";


const CheckoutPesawat1 = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
   const data = {
    id: productPesawat.id,
    productName : productPesawat.name,
    price: productPesawat.price,
    quantity : quantity,
   }

   const response = await fetch("/api/tokenizer/", {
    method: "POST",
    body: JSON.stringify(data)
   })

   const requestData = await response.json();

   window.snap.pay(requestData.token)
   

  };

  const generatePaymentLink = async () => {
    alert("Checkout Payment Link! 🔥")
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex sm:gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            ➖
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-black border-transparent text-center"
            onChange={quantity}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div>
        <button
          className="rounded bg-indigo-500 p-4 text-sm font-medium transition hover:scale-105"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CheckoutPesawat1;
