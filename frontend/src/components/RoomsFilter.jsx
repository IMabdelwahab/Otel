export default function RoomsFilter({filters, setFilters}){
  const statuses = ['All','Available','Occupied','Maintenance','Reserved']
  const types = ['All','Suite','Standard','Presidential']

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input
          type="text"
          placeholder="Search room number or title"
          value={filters.search}
          onChange={(e)=> setFilters(f=>({...f, search: e.target.value}))}
          className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none"
        />

        <select value={filters.status} onChange={(e)=> setFilters(f=>({...f, status: e.target.value}))} className="mt-3 md:mt-0 p-2 border rounded-md">
          {statuses.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={filters.type} onChange={(e)=> setFilters(f=>({...f, type: e.target.value}))} className="mt-3 md:mt-0 p-2 border rounded-md">
          {types.map(t=> <option key={t} value={t}>{t}</option>)}
        </select>

        <button onClick={()=> setFilters({search:'', status:'All', type:'All'})} className="mt-3 md:mt-0 ml-auto bg-gray-100 px-3 py-2 rounded-md">Reset</button>
      </div>
    </div>
  )
}
