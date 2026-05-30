import { Calendar, Key, Telescope, Users, DollarSign } from 'lucide-react'

export default function DashboardOverview(){
  const cards = [
    {title: "Available Rooms", value: "42 / 150", icon: Key, color: 'bg-amber-100', accent: 'text-amber-600'},
    {title: "Today's Check-ins", value: "18", icon: Calendar, color: 'bg-blue-50', accent: 'text-blue-600'},
    {title: "Today's Check-outs", value: "24", icon: Telescope, color: 'bg-gray-50', accent: 'text-gray-700'},
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {cards.map((c,idx)=> {
        const Icon = c.icon
        return (
          <div key={idx} className="bg-white rounded-lg p-4 shadow-md border border-gray-200 flex items-center">
            <div className={`p-3 rounded-md ${c.color} mr-4`}>
              <Icon size={20} className={`${c.accent}`} />
            </div>
            <div>
              <div className="text-sm text-gray-500">{c.title}</div>
              <div className="text-2xl font-semibold text-gray-800 mt-1">{c.value}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
