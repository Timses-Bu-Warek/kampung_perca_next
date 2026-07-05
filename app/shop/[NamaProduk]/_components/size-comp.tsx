'use client';

import { parseAsString, useQueryState } from 'nuqs';

export default function SizeComp({
  sizeList,
}: Readonly<{
  sizeList: string[];
}>) {
  const [ukuran, setUkuran] = useQueryState('size', parseAsString.withDefault(''));

  const handlePilihUkuran = (ukuran: string) => {
    setUkuran(ukuran);
  };

  return (
    <div className="pt-4">
      <h3 className="text-gray-800 uppercase font-inter pt-4">Size</h3>

      <div className="flex items-center gap-2">
        {sizeList.map((size: string) => (
          <div className="size-selector" key={size}>
            <input
              checked={ukuran === size}
              className="hidden"
              id={'size-' + size}
              name="size"
              onChange={() => handlePilihUkuran(size)}
              type="radio"
              value={size}
            />
            <label
              className="text-lg border border-gray-200 rounded-xs h-6 w-6 flexl items-center justify-center cursor-pointer shadow-xs text-gray-600"
              htmlFor={'size-' + size}
            >
              {size}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
