"use client"
import { useState } from "react";

export default function QuantityComp(context: { params: { quantity: any }}) {
    const [quantity, setQuantity] = useState(1);
    context.params.quantity(quantity);
    

    function increaseQuantity() {
        setQuantity((quantity: number) => quantity + 1);
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity((quantity: number) => quantity - 1);
        }
    }

    // console.log("Quantity params: ", context.params.quantity);

    return (
        <div className="mt-4">
            <h3 className="pt-4 text-gray-800 uppercase font-inter">Quantity</h3>
            <div
                className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max"
            >
                <button
                    type="button"
                    className="flex items-center justify-center w-full h-8 text-lg cursor-pointer select-none md:w-8"
                    onClick={decreaseQuantity} >
                    -
                </button>
                <div className="flex items-center justify-center w-8 h-8 text-base">
                    {/* <input type="number" name="" id="" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} /> */}
                    {quantity}
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full h-8 text-lg cursor-pointer select-none md:w-8"
                    onClick={increaseQuantity} >
                    +
                </button>
            </div>
        </div>
    )
}
