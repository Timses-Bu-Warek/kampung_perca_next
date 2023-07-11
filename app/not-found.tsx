import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container bg-slate-900 mt-8 text-white">
      <h2 className="text-center">404 Not Found</h2>
      <p>Maaf, sepertinya halaman yang diminta tidak ada :(</p>
      <p>
        Kembali ke <a href="/" className="text-blue-500">halaman utama</a>
      </p>
    </div>
  )
}