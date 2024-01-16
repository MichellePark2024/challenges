import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
console.log("DATA",data)
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
      <p>
      {data.reviews.map((review)=> {
        return (
          <h1 key={review._id}>{review.rating} {review.text} {review.title}</h1>
          
        )
      })}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
