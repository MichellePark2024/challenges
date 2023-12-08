import Link from "next/link";

export default function HomePage() {
  return (
    // <div>
    //   <h1>Hello from Next.js</h1>
    // </div>
    <div>
      <h1>The Lord Of The Rings App</h1>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
       </li>
      </ul>
    </div>
  );
}
