"use client"

import { useState } from "react"

export default function SizeComp(context: { params: { dataUkuran: any, chooseUkuran: any } }) {
    const [ukuran, setUkuran] = useState("");
    

      const handlePilihUkuran = (ukuran : any) => {
        setUkuran(ukuran);
        context.params.chooseUkuran(ukuran);
      };

    return (
        <div className="pt-4">
            <h3 className="text-gray-800 uppercase font-inter pt-4">Size</h3>

            <div className="flex items-center gap-2">
                {context.params.dataUkuran.map((size: any) =>
                    <div className="size-selector" key={size}>
                        <input type="radio" name="size" className="hidden" id={"size-" + size} value={size} onChange={() => handlePilihUkuran(size)} />
                        <label
                            htmlFor={"size-" + size}
                            className="text-lg border border-gray-200 rounded-xs h-6 w-6 flexl items-center justify-center cursor-pointer shadow-xs text-gray-600"
                        >{size}</label>
                    </div>
                )}
            </div>
        </div>
    )
}
