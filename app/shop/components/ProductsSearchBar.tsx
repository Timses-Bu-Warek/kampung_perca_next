"use client";

import React from "react";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function ProductsSearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const getSearchProducts = async (e: any) => {
    e.preventDefault();
    router.push(`/shop/search?NamaProduk=${search}`);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      // Get input value
      getSearchProducts(event);
    }
  };
  return (
    <form onSubmit={getSearchProducts}>
      <div className="w-full my-3 h-10 max-w-xl justify-between relative flex">
        <span className="absolute left-4 top-2 text-lg text-gray-400">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="w-full bg-white border border-primary border-r-0 pl-12 rounded-l-md focus:outline-none"
          placeholder="Cari"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
          Cari
        </button>
      </div>
    </form>
  );
}
