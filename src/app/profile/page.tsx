
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const profile = async () => {

   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    console.log(data)


    return (
        <div className="m-12">
            <h1 className="text-3xl text-center">Profile</h1>
            <table className="">
  <thead>
    <tr>
      <th>UserID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>

  <tbody>
    {data.map((post: Post) => (
      <tr key={post.id}>
        <td>{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
    );
}

export default profile