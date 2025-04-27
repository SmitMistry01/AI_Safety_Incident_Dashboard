function Card() {
  return (
    <div className="p-10">
        <div className="overflow-x-auto py-5 no-scrollbar">
          <div className="flex flex-nowrap gap-5">
            <div className="flex-shrink-0 w-[320px] h-[350px] bg-cyan-300 rounded-lg shadow-md hover:shadow-lg transition p-5 justify-items-center">
              <h1 className="text-2xl font-semibold mt-10 mb-10">Title</h1>
              <p className="text-gray-600">Severity</p>
              <h1>Date</h1>
            <div className="flex mt-4 p-4 items-end justify-between">
              <button className="text-xs rounded-xl border-1 bg-blue-300 px-2 py-1 cursor-pointer">View Details</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card