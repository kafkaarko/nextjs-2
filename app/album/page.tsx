
interface AlbumProps {
    userId: number,
    id: number,
    title: string,
}

const BASE_URL = "https://jsonplaceholder.typicode.com/albums"
const Album = async() => {
    const respone = await fetch(BASE_URL)
    const albums: AlbumProps[] = await respone.json()
  return (
    <div>
      
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>id</th>
        <th>title</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {albums.map((album)=> {
        return (
      <tr key={album.id}>
        <th>{album.userId}</th>
        <td>{album.id}</td>
        <td>{album.title}</td>
      </tr>
        )
      })}
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Album
