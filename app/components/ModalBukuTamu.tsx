"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
// import { bukuFill } from "../layout"

type BukuTamu = {
  nama: string,
  provinsi: string,
  kota: string,
  gender: string,
  umur: number
}

const initState : BukuTamu = {
  nama: "",
  provinsi: "",
  kota: "",
  gender: "",
  umur: 0
}

export default function ModalBukuTamu() {
  const [data, setData] = useState(initState)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(JSON.stringify(data))
    const { nama, provinsi, kota, gender, umur } = data

    // Send data to API Route
    const res = await fetch('http://localhost:3000/api/buku-tamu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama,
        provinsi,
        kota,
        gender,
        umur
      })
    })
    const resJson = await res.json()
    console.log(resJson)
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      localStorage.setItem("isiBukuTamu", "true")
      sessionStorage.setItem("isiBukuTamu", "true")
    }
    // bukuFill = "true";
    router.refresh
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const nama = e.target.name

    setData(prevData => ({
      ...prevData,
      [nama]: e.target.value
    }))
  }

  const canSave = [...Object.values(data)].every(Boolean)

  return (
    <div
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div
        className="block bg-slate-50 p-6 rounded-xl  w-90"
      >
        <form onSubmit={handleSubmit} action="">
          <h1 className="font-montserrat text-2xl my-4">
            Selamat Datang di
            <span className="text-primary font-bold"> Kampung Perca🌼</span>
          </h1>
          <h2 className="font-inter text-sm mt-4 mb-4">
            Harap mengisi buku tamu di bawah ya
          </h2>
          <div id="fullname" className="flex flex-row">
            <div id="firstname" className="w-full mr-1">
              <label htmlFor="fname" className="text-sm">Nama</label>
              <input
                type="text"
                name="nama"
                id="fname"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
                value={data.nama}
                onChange={handleChange}
              />
            </div>
            {/* <div id="lastname" className="w-1/2 mr-1 mb-4">
              <label htmlFor="lname" className="text-sm">Nama Belakang</label>
              <input
                type="text"
                name=""
                id="lname"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
              />
            </div> */}
          </div>

          {/* <!-- alamat --> */}
          <div>
            {/* <label htmlFor="alamat" className="text-sm">Alamat</label>
          <input
            placeholder="Blok/Jalan/No Rumah/RT-RW"
            type="text"
            name=""
            id="alamat"
            className="h-full w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
          /> */}

            <div id="alamat_lengkap" className="flex flex-row mt-2">
              <div id="provinsiDiv" className="w-1/2 mr-1">
                <label htmlFor="provinsi" className="text-sm">Provinsi</label>
                <input
                  placeholder="Tulis Provinsi Anda"
                  type="text"
                  name="provinsi"
                  id="provinsi"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
                  value={data.provinsi}
                  onChange={handleChange}
                />
              </div>
              <div id="kotaDiv" className="w-1/2 mr-1 mb-4">
                <label htmlFor="kota" className="text-sm">Kota</label>
                <input
                  placeholder="Tulis Kota Anda"
                  type="text"
                  name="kota"
                  id="kota"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
                  value={data.kota}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>


          <div id="usia" className="flex flex-row mt-2">
            <div id="ageDiv" className="w-1/2 mr-1">
              <label htmlFor="age" className="text-sm">Usia</label>
              <input
                placeholder="Masukkan usia anda"
                type="number"
                name="umur"
                id="umur"
                value={data.umur}
                onChange={handleChange}
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
              />
            </div>
            <div id="gender" className="text-sm mb-6">
              <p className="mt-2">Jenis Kelamin</p>
              <label htmlFor="Laki-Laki">
                Laki-Laki
                <input
                  type="radio"
                  name="gender"
                  id="Laki-Laki"
                  value={data.gender}
                  onChange={handleChange}
                  className="text-sm mx-1"
                  // checked
                />
              </label>
              <label htmlFor="Perempuan">
                Perempuan
                <input
                  type="radio"
                  name="gender"
                  id="Perempuan"
                  className="text-sm mx-1"
                  value={data.gender}
                  onChange={handleChange}
                  // checked
                />
              </label>
            </div>
          </div>

          {/* <!-- button submit --> */}
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button
              type="reset" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 font-inter"
            >
              Reset
            </button>
            <button
              type="submit" className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white font-inter"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
