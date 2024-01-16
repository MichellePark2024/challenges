import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";


export default async function handler(request, response) {

  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    // const products = await Product.findById(id).populate([{ path: "reviews", strictPopulate: false }]);
    const product = await Product.findById(id).populate("reviews");
    console.log(product)

    return response.status(200).json(product);
  }

  else {
    return response.status(404).json({ status: "Not Found" });
  }

}