import { Layers, CheckCircle, Wrench, Users } from 'lucide-react'

export default function RoomsOverview(){
  const cards = [
    {title: 'Total Rooms', value: '142', icon: Layers, color: 'bg-amber-50', accent: 'text-amber-700'},
    {title: 'Available', value: '38', icon: CheckCircle, color: 'bg-emerald-50', accent: 'text-emerald-700'},
    {title: 'Occupied', value: '94', icon: Users, color: 'bg-rose-50', accent: 'text-rose-600'},
    {title: 'Maintenance', value: '10', icon: Wrench, color: 'bg-gray-50', accent: 'text-gray-600'},
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((c,idx)=>{
        const Icon = c.icon
        return (
          <div key={idx} className="bg-white rounded-lg p-4 shadow border border-gray-200 flex items-center">
            <div className={`p-3 rounded-md ${c.color} mr-4`}>
              <Icon size={20} className={`${c.accent}`} />
            </div>
            <div>
              <div className="text-sm text-gray-500">{c.title}</div>
              <div className="text-xl font-semibold text-gray-800 mt-1">{c.value}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
