import { useEffect, useState } from "react";

export function MyComponent() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <>
      {now.getDate()}/{now.getMonth() + 1}/{now.getFullYear()}
    </>
  );
}

export default function HomePage() {
  const name = "Faris Firdaus Ariputra";

  return (
    <center>
      <p></p>
      <i>
        Halo World!, Nama saya adalah "{name}" - <MyComponent />
      </i>
    </center>
  );
}
