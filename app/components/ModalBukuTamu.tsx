"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type BukuTamu = {
  nama: string;
  provinsi: string;
  kota: string;
  gender: string;
  umur: number;
  kesanPesan: string;
};

const initState: BukuTamu = {
  nama: "",
  provinsi: "",
  kota: "",
  gender: "",
  umur: 0,
  kesanPesan: "",
};

export default function ModalBukuTamu() {
  const [data, setData] = useState(initState);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(JSON.stringify(data));
    const { nama, provinsi, kota, gender, umur, kesanPesan } = data;

    // Send data to API Route
    const res =
      process.env.NODE_ENV === "production"
        ? await fetch("https://www.kampungperca.id/api/buku-tamu", {
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin': origin || '*',
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama,
            provinsi,
            kota,
            gender,
            umur,
            kesanPesan,
          }),
        })
        : await fetch("http://localhost:3000/api/buku-tamu", {
            method: "POST",
            headers: {
              'Access-Control-Allow-Origin': origin || '*',
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nama,
              provinsi,
              kota,
              gender,
              umur,
              kesanPesan,
            }),
          });
    router.refresh();
    // Simulate a loading state for 2 seconds
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <form onSubmit={handleSubmit} action="">
          {/* Render the spinner if loading is true */}
          {isLoading ? (
            <div className="border-4 border-solid rounded-full animate-spin h-14 w-14 border-t-slate-500 border-l-slate-50" />
          ) : (
            <>
              <h1 className="my-4 text-2xl font-montserrat">
                Selamat Datang di
                <span className="font-bold text-primary"> Kampung Perca🌼</span>
              </h1>
              <h2 className="mt-4 mb-4 text-sm font-inter">
                Harap mengisi buku tamu di bawah ya
              </h2>
              <div id="fullname" className="flex flex-col">
                <div id="firstname" className="w-full mr-1">
                  <label htmlFor="fname" className="text-sm">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    id="fname"
                    className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                    required
                    value={data.nama}
                    onChange={handleChange}
                  />
                </div>

                <div id="alamat_lengkap" className="flex flex-row mt-2">
                  <div id="provinsiDiv" className="w-1/2 mr-1">
                    <label htmlFor="provinsi" className="text-sm">
                      Provinsi
                    </label>
                    <input
                      placeholder="Tulis Asal Provinsi Anda"
                      type="text"
                      name="provinsi"
                      id="provinsi"
                      required
                      className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                      value={data.provinsi}
                      onChange={handleChange}
                    />
                  </div>
                  <div id="kotaDiv" className="w-1/2 mb-4 mr-1">
                    <label htmlFor="kota" className="text-sm">
                      Kota
                    </label>
                    <input
                      placeholder="Tulis Asal Kota Anda"
                      type="text"
                      name="kota"
                      id="kota"
                      required
                      className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                      value={data.kota}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div id="usia" className="flex flex-col mt-2 md:flex-row">
                <div id="ageDiv" className="w-full mr-1 md:w-1/2">
                  <label htmlFor="age" className="text-sm">
                    Usia
                  </label>
                  <input
                    placeholder="Masukkan usia anda"
                    type="number"
                    name="umur"
                    id="umur"
                    required
                    value={data.umur}
                    onChange={handleChange}
                    className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                  />
                </div>
                <div id="gender" className="mb-6 text-sm">
                  <p className="mt-2">Jenis Kelamin</p>
                  <label htmlFor="Laki-Laki">
                    Laki-Laki
                    <input
                      type="radio"
                      name="gender"
                      id="Laki-Laki"
                      required
                      value="Laki-Laki"
                      onChange={handleChange}
                      className="mx-1 text-sm"
                      // checked
                    />
                  </label>
                  <label htmlFor="Perempuan">
                    Perempuan
                    <input
                      type="radio"
                      name="gender"
                      id="Perempuan"
                      className="mx-1 text-sm"
                      required
                      value="Perempuan"
                      onChange={handleChange}
                      // checked
                    />
                  </label>
                </div>
              </div>
              <div id="kesanPesan" className="flex flex-row">
                <div id="kesan" className="w-full mr-1">
                  <label htmlFor="kPesan" className="text-sm">
                    Kesan dan Pesan
                  </label>
                  <input
                    type="text"
                    name="kesanPesan"
                    id="kPesan"
                    className="w-full h-8 pl-2 text-sm bg-transparent border rounded-md shadow-xs border-slate-300 outline-primary"
                    required
                    value={data.kesanPesan}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-3 border-t w-100">
                <button
                  type="reset"
                  className="px-3 py-1 mr-1 text-white bg-red-600 rounded-sm hover:bg-red-700 font-inter"
                  onClick={() => setData(initState)}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 text-white bg-blue-600 rounded-sm hover:bg-blue-700 font-inter"
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
