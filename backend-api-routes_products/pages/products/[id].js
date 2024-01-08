import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailsPage() {
    const router = useRouter();
    const { id } = router.query;

    
    const { data, error } = useSWR(`/api/products/${id}`, fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div>
          {data && (
            <div>
              <h1>name: {data.name}</h1>
              <p>description: {data.description}</p>
              <p>price: {data.price}</p>
              <p>currency: {data.currency}</p>
              <p>category: {data.category}</p>
            </div>
          )}
        </div>
      );
    
}