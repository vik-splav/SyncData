import Datatable from "@/components/datatable";

export default function Home() {
  return (
    <div className="flex-grow bg-white p-4 h-[80vh] rounded-tl-xl text-black">
    {/* Content for the second div */}
    <div className="flex-grow bg-white p-6">
      <h1 className="text-4xl font-bold">Logs</h1>
      <div className="border-b-2 mt-4 mb-6"></div>
      <div className="flex">
          <Datatable/>
      </div>
    </div>
  </div>
  )
}
