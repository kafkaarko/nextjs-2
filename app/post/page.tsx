import CardList from "../components/post/CardList"
import ViewPageUser from "../components/post/ViewPageUser"


const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

interface  Ipost{
  userId: number,
  id:number,
  title: string,
  body: string,
}
const Post = async() => {

  const respone = await fetch(BASE_URL , {  cache: "no-store"
    // akan terus fatching jika ada data yang baru
   })
  const posts: Ipost[] = await respone.json()
  return ( 
    <div className="bg-fuchsia-700">
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>ini dari file post</h1>
      {/* tombol yang dibawah adalah client side */}
      {posts.map((post) => {
        return (
      <CardList key={post.id}>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <ViewPageUser userId={post.userId} />
      </CardList>

        )
      })}
    </div>
  )
}

export default Post
