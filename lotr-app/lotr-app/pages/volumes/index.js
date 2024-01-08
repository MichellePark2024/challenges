import { introduction } from "../../resources/lib/data";
import Link from "next/link";

export default function Volumes() {
    return (
      // <div>
      //   <h1>Hello from Next.js</h1>
      // </div>
      <div>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All volumes</h2>
        <ul>
          <li>
            <Link href="/volumes/the-fellowship-of-the-ring" >the fellowship-of the ring</Link>
         </li>
         
         <li>
            <Link href="/volumes/the-two-towers">the two towers</Link>
         </li>
         <li>
            <Link href="/volumes/the-return-of-the-king">the return of the king</Link>
         </li>
        </ul>
        
      </div>
    );
  }