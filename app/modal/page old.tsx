export default function modal() {
  return (
    <div
    className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <div
      className="block bg-slate-50 p-6 rounded-xl  w-90"
    >
      <form action="">
        <h1 className="font-montserrat text-2xl my-4">
          Selamat Datang di
          <span className="text-primary font-bold">Kampung Perca🌼</span>
        </h1>
        <h2 className="font-inter text-sm mt-4 mb-4">
          Harap mengisi buku tamu di bawah ya
        </h2>
        <div id="fullname" className="flex flex-row">
          <div id="firstname" className="w-1/2 mr-1">
            <label htmlFor="fname" className="text-sm">Nama Depan</label>
            <input
              type="text"
              name=""
              id="fname"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
            />
          </div>
          <div id="lastname" className="w-1/2 mr-1 mb-4">
            <label htmlFor="lname" className="text-sm">Nama Belakang</label>
            <input
              type="text"
              name=""
              id="lname"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
            />
          </div>
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
            <div id="provinsi" className="w-1/2 mr-1">
              <label htmlFor="provinsi" className="text-sm">Provinsi</label>
              <input
                placeholder="Tulis Provinsi Anda"
                type="text"
                name=""
                id="provinsi"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
              />
            </div>
            <div id="kecamatan" className="w-1/2 mr-1 mb-4">
              <label htmlFor="kecamatan" className="text-sm">Kecamatan</label>
              <input
                placeholder="Tulis Kecamatan Anda"
                type="text"
                name=""
                id="kecamatan"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
              />
            </div>
          </div>
        </div>


        <div id="alamat_lengkap" className="flex flex-row mt-2">
          <div id="provinsi" className="w-1/2 mr-1">
            <label htmlFor="provinsi" className="text-sm">Usia</label>
            <input
              placeholder="Masukkan usia anda"
              type="number"
              name=""
              id="provinsi"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-primary shadow-sm"
            />
          </div>
          <div id="gender" className="text-sm mb-6">
            <p className="mt-2">Jenis Kelamin</p>
            <input
              type="radio"
              name="gender"
              id="pria"
              className="text-sm mx-1"
              checked
            /><label htmlFor="pria">Laki-Laki</label>
            <input
              type="radio"
              name="gender"
              id="wanita"
              className="text-sm mx-1"
              checked
            /><label htmlFor="pria">Perempuan</label>
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
