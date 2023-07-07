export default function FloatingButton() {
  return (
    <div className="fixed z-20 bottom-20 right-6 px-3 bg-blue-600 w-auto h-10 rounded-3xl drop-shadow-lg flex justify-center font-montserrat items-center text-white text-sm hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-600"> 
        <i className="fas fa-arrow-up"></i><span> &nbsp; Back to Top</span>
    </div>
  )
}
