import "./App.css";
import { useQuery } from "@tanstack/react-query";
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

  return <div className="App">Car Website</div>;
}

export default App;
