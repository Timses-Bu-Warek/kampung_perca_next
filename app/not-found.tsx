import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="  flex items-center justify-center h-screen">
    <div className="  text-center">
      <h1 className="text-4xl font-semibold mb-4">Oops!</h1>
      <p className="text-gray-600">
        Mohon maaf, website tujuanmu belum tersedia.
      </p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </a>
    </div>
  </div>
  )
}