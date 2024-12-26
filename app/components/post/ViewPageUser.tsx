"use client"

interface ViewPageUserProps {
  userId:number,
}
const ViewPageUser: React.FC<ViewPageUserProps> = ({userId}) => {
    const handleClick = () => alert(`user id: ${userId}`)
  return (
    <div>
      <button onClick={handleClick} >pencet</button>
    </div>
  )
}

export default ViewPageUser
