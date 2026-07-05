'use client';

import { parseAsString, useQueryState } from 'nuqs';
import { type ChangeEvent, useCallback } from 'react';

export default function ProductsSearchBar() {
  const [search, setSearch] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({ shallow: false }),
  );

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [setSearch],
  );

  return (
    <form>
      <div className="w-full my-3 h-10 max-w-xl justify-between relative flex">
        <span className="absolute left-4 top-2 text-lg text-gray-400">
          <i className="fas fa-search"></i>
        </span>
        <input
          className="w-full bg-white border border-primary border-r-0 pl-12 rounded-l-md focus:outline-hidden"
          onChange={handleSearchInputChange}
          placeholder="Cari"
          type="search"
          value={search}
        />
        <button
          className="bg-primary border border-primary text-white px-4 rounded-r-md hover:bg-transparent hover:text-primary transition"
          type="button"
        >
          Cari
        </button>
      </div>
    </form>
  );
}
