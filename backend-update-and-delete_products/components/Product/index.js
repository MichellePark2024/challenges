import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";


export default function Product() {
const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  
  const { data, isLoading } = useSWR(`/api/products/${id}`);
const { mutate } = useSWR("/api/products");



  async function handleEditProduct(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }



  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }
    router.push("/")
}
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
    if (!data) {
      return;
    }

    
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>

    <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
    Edit</button>

    <button type="button" onClick={() => handleDeleteProduct(id)}>
    Delete</button>

    {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data.product}
          isEditMode={true}
        />
      )}

    </ProductCard>

    
  );
}
