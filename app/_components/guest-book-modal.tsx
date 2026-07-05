'use client';

import { useRouter } from 'next/navigation';
import { type ChangeEvent, type SubmitEvent, useState } from 'react';

type BukuTamu = {
  nama: string;
  provinsi: string;
  kota: string;
  gender: string;
  umur: number;
  kesanPesan: string;
};

const initState: BukuTamu = {
  gender: '',
  kesanPesan: '',
  kota: '',
  nama: '',
  provinsi: '',
  umur: 0,
};

export default function GuestBookModal() {
  const [data, setData] = useState(initState);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(JSON.stringify(data));
    const { nama, provinsi, kota, gender, umur, kesanPesan } = data;

    // Send data to API Route
    const res =
      process.env.NODE_ENV === 'production'
        ? await fetch('/api/buku-tamu', {
            body: JSON.stringify({
              gender,
              kesanPesan,
              kota,
              nama,
              provinsi,
              umur,
            }),
            headers: {
              'Access-Control-Allow-Origin': origin || '*',
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })
        : await fetch('http://localhost:3000/api/buku-tamu', {
            body: JSON.stringify({
              gender,
              kesanPesan,
              kota,
              nama,
              provinsi,
              umur,
            }),
            headers: {
              'Access-Control-Allow-Origin': origin || '*',
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });
    router.refresh();
    // Simulate a loading state for 2 seconds
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nama = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [nama]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-50 z-500">
      <div
        className={
          isLoading
            ? `block bg-transparent p-6 rounded-xl w-90 `
            : ` block bg-slate-50 p-6 rounded-xl w-90`
        }
      >
        <form action="" onSubmit={handleSubmit}>
          {/* Render the spinner if loading is true */}
          {isLoading ? (
            <div className="border-4 border-solid rounded-full animate-spin h-14 w-14 border-t-slate-500 border-l-slate-50" />
          ) : (
            <>
              <h1 className="my-4 text-2xl font-montserrat">
                Selamat Datang di
                <span className="font-bold text-primary"> Kampung Perca🌼</span>
              </h1>
              <h2 className="mt-4 mb-4 text-sm font-inter">Harap mengisi buku tamu di bawah ya</h2>
              <div className="flex flex-col" id="fullname">
                <div className="w-full mr-1" id="firstname">
                  <label className="text-sm" htmlFor="fname">
                    Nama
                  </label>
                  <input
                    className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                    id="fname"
                    name="nama"
                    onChange={handleChange}
                    required
                    type="text"
                    value={data.nama}
                  />
                </div>

                <div className="flex flex-row mt-2" id="alamat_lengkap">
                  <div className="w-1/2 mr-1" id="provinsiDiv">
                    <label className="text-sm" htmlFor="provinsi">
                      Provinsi
                    </label>
                    <input
                      className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                      id="provinsi"
                      name="provinsi"
                      onChange={handleChange}
                      placeholder="Tulis Asal Provinsi Anda"
                      required
                      type="text"
                      value={data.provinsi}
                    />
                  </div>
                  <div className="w-1/2 mb-4 mr-1" id="kotaDiv">
                    <label className="text-sm" htmlFor="kota">
                      Kota
                    </label>
                    <input
                      className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                      id="kota"
                      name="kota"
                      onChange={handleChange}
                      placeholder="Tulis Asal Kota Anda"
                      required
                      type="text"
                      value={data.kota}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 md:flex-row" id="usia">
                <div className="w-full mr-1 md:w-1/2" id="ageDiv">
                  <label className="text-sm" htmlFor="age">
                    Usia
                  </label>
                  <input
                    className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                    id="umur"
                    name="umur"
                    onChange={handleChange}
                    placeholder="Masukkan usia anda"
                    required
                    type="number"
                    value={data.umur}
                  />
                </div>
                <div className="mb-6 text-sm" id="gender">
                  <p className="mt-2">Jenis Kelamin</p>
                  <label htmlFor="Laki-Laki">
                    Laki-Laki
                    <input
                      className="mx-1 text-sm"
                      id="Laki-Laki"
                      name="gender"
                      onChange={handleChange}
                      required
                      type="radio"
                      value="Laki-Laki"
                      // checked
                    />
                  </label>
                  <label htmlFor="Perempuan">
                    Perempuan
                    <input
                      className="mx-1 text-sm"
                      id="Perempuan"
                      name="gender"
                      onChange={handleChange}
                      required
                      type="radio"
                      value="Perempuan"
                      // checked
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-row" id="kesanPesan">
                <div className="w-full mr-1" id="kesan">
                  <label className="text-sm" htmlFor="kPesan">
                    Kesan dan Pesan
                  </label>
                  <input
                    className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                    id="kPesan"
                    name="kesanPesan"
                    onChange={handleChange}
                    required
                    type="text"
                    value={data.kesanPesan}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-3 border-t w-100">
                <button
                  className="px-3 py-1 mr-1 text-white bg-red-600 rounded-sm hover:bg-red-700 font-inter"
                  onClick={() => setData(initState)}
                  type="reset"
                >
                  Reset
                </button>
                <button
                  className="px-3 py-1 text-white bg-blue-600 rounded-sm hover:bg-blue-700 font-inter"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </>
          )}

          {/* <!-- button submit -->
          <div className="flex items-center justify-end p-3 border-t w-100">
            <button
              type="reset"
              className="px-3 py-1 mr-1 text-white bg-red-600 rounded-sm hover:bg-red-700 font-inter"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-3 py-1 text-white bg-blue-600 rounded-sm hover:bg-blue-700 font-inter"
            >
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
