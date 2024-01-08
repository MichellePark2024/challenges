import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
    const { data, error } = useSWR('/api/products', fetcher);
  
    // Handle loading and error states if needed
  
    return (
      <div>
        {data && (
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  

  