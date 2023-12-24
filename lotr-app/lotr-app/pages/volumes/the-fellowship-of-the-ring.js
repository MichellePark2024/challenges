import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowship() {
   const volumeObject = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")
   
    console.log(volumeObject)
    return (
        
      <div>
        <Link href="/volumes">All volumes</Link>
        
        <h1>{volumeObject.title}</h1>
        <p>{volumeObject.description}</p>
        <ul>
        {volumeObject.books.map((book) => {
            return (
            <li key={book.ordinal}>{book.ordinal} {book.title}</li>
            );
        })}
        </ul>
        <Image src={volumeObject.cover}  width={140} height={230} alt="cover"/>
      </div>

    );
  }