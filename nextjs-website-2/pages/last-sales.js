import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-bf940-default-rtdb.firebaseio.com/sales.json")
      .then((responese) => responese.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!sales) {
    return <h1>No data yet</h1>;
  }

  return (
    <div>
      <ul>
        {sales.map((sale) => (
          <h1 key={sale.id}>
            {sale.username} - ${sale.volume}
          </h1>
        ))}
      </ul>
    </div>
  );
}
