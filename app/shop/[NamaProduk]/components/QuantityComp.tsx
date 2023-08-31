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

    console.log("Quantity params: ", context.params.quantity);

    return (
        <div className="mt-4">
            <h3 className="text-gray-800 uppercase font-inter pt-4">Quantity</h3>
            <div
                className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"
            >
                <button
                    type="button"
                    className="h-8 w-full md:w-8 text-lg flex items-center justify-center cursor-pointer select-none"
                    onClick={decreaseQuantity} >
                    -
                </button>
                <div className="h-8 w-8 text-base flex items-center justify-center">
                    {/* <input type="number" name="" id="" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} /> */}
                    {quantity}
                </div>
                <button
                    type="button"
                    className="h-8 w-full md:w-8 text-lg flex items-center justify-center cursor-pointer select-none"
                    onClick={increaseQuantity} >
                    +
                </button>
            </div>
        </div>
    )
}
