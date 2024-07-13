import { useQuery } from "@tanstack/react-query";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
const url = "https://freetestapi.com/api/v1/cars";

function App() {
  const fetchCars = async () => {
    const data = await fetch(url).then((response) => response.json());
    return data;
  };
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });
  if (isPending) {
    console.log("loadding");
  }
  if (isError) {
    console.log("error");
  }

  console.log(data);

  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
