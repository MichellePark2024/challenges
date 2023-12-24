import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";

export default function TheTwo() {
   const volumeObject = volumes.find(({slug}) => slug === "the-two-towers")
   
    console.log(volumeObject)
    return (
        
      <div>
        <Link href="/volumes">All volumes</Link>
        <h1>{volumeObject.title}</h1>
        <p>{volumeObject.description}</p>
        <ul>
        {volumeObject.books.map((book) => {
            return (
            <li>{book.ordinal} {book.title}</li>
            );
        })}
        </ul>
      </div>
      
    );
  }