const Homeview = () => {
  return (
    <div>
        <div className="h-[580px] bg-[url('/view.png')] bg-gray-100 bg-cover bg-center bg-no-repeat flex flex-col items-center pt-12 gap-3">
            <img className="w-72" src="homeview.png" alt="" />
            <p className="text-3xl">Design for life at home.</p>
            <span className="flex gap-5">
                <button className="bg-[#0071e3] text-white px-4 py-2 rounded-full">Learn more</button>
                <button className="border border-[#0071e3] text-[#0071e3] px-4 py-2 rounded-full">Buy</button>
            </span>
        </div>
    </div>
  )
}

export default Homeview