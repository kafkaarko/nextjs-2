import Link from "next/link";


export default function Home() {
  return (
    <>

    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">hello!</h1>
          <p className="py-6">
            hari ke dua belajar next js
          </p>
          <Link href="/album" className="btn  btn-secondary"> Album page</Link>
          <Link href="/post" className="btn btn-secondary"> post page</Link>
          
        </div>
      </div>
    </div>
    <br />
    </>
  );
}
