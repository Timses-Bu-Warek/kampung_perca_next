'use client';
import { parseAsString, useQueryState } from 'nuqs';

export function ProductSort() {
  const [sort, setSort] = useQueryState(
    'sort',
    parseAsString.withDefault('default').withOptions({ shallow: false }),
  );

  return (
    <div className="flex items-center mb-4">
      <div className="w-50 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-xs rounded-sm focus:ring-primary focus:border-primary z-10">
        <div className="dropdown inline-block relative">
          <button
            className="font-semibold py-2 px-4 rounded-sm inline-flex items-center"
            type="button"
          >
            <span className="mr-1">Urut berdasarkan</span>
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow</title>
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <button
                className="rounded-t bg-primary text-white  hover:bg-white hover:text-primary py-2 px-4 block whitespace-no-wrap"
                onClick={() => setSort('default')}
                type="button"
              >
                Urutan Default
              </button>
            </li>
            <li className="">
              <button
                className="bg-primary text-white  hover:bg-white hover:text-primary py-2 px-4 block whitespace-no-wrap"
                onClick={() => setSort('lowHigh')}
                type="button"
              >
                Harga Rendah ke Tinggi
              </button>
            </li>
            <li className="">
              <button
                className="rounded-b bg-primary text-white  hover:bg-white hover:text-primary py-2 px-4 block whitespace-no-wrap"
                onClick={() => setSort('highLow')}
                type="button"
              >
                Harga Tinggi ke Rendah
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
