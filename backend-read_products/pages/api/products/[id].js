import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
// import { products } from "../../../lib/products";

// export default function handler(request, response) {
//   const { id } = request.query;

//   const product = products.find((product) => product._id === id);

//   if (!product) {
//     return response.status(404).json({ status: "Not Found" });
//   }

//   response.status(200).json(product);
// }


export default async function handler(request, response) {
  
  await dbConnect();
  const { id } = request.query;
const product = Product.findById(id);
  // const product = products.find((product) => product._id === id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
