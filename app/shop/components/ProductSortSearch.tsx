"use client"
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export function ProductSortSearch () {
    const pathname = usePathname()
    const searchParams: any = useSearchParams()!
  
    const searchNamaProdukValues: any = searchParams.get("NamaProduk");
    const sortValues : any = searchParams.get("sort");
  
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
  
        return params.toString()
      },
      [searchParams]
    )
    return(
        <div className="flex items-center mb-4">
            <div className="w-50 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-xs rounded-sm focus:ring-primary focus:border-primary z-10">
              <div className="dropdown inline-block relative">
                <button className="font-semibold py-2 px-4 rounded-sm inline-flex items-center">
                  <span className="mr-1">Urut berdasarkan</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><Link className="rounded-t bg-primary text-white  hover:bg-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href={pathname + '?' + createQueryString('sort', 'default')} passHref>Urutan Default</Link></li>
                  <li className=""><Link className="bg-primary text-white  hover:bg-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href={pathname + '?' + createQueryString('sort', 'lowHigh')} passHref>Harga Rendah ke Tinggi</Link></li>
                  <li className=""><Link className="rounded-b bg-primary text-white  hover:bg-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href={pathname + '?' + createQueryString('sort', 'highLow')} passHref>Harga Tinggi ke Rendah</Link></li>
                </ul>
              </div>
            </div>
        </div>
    )
}