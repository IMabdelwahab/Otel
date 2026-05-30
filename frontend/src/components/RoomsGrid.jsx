import RoomCard from './RoomCard'

export default function RoomsGrid({rooms = []}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {rooms.map((r,idx)=> (
        <RoomCard key={idx} room={r} />
      ))}
    </div>
  )
}
