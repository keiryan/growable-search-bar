import "./App.css";
import { Container } from "./styles.app";
import Search from "./Search/search";

function App() {
  return (
    <Container>
      <Search />
      <Search
        config={{
          placeholder: "Search",
          color: "#ffffff",
          backgroundColor: "#19535F",
          border: "2px solid orange",
          fontWeight: "bold",
          searchButtonColor: "#000",
          searchButtonColorHover: "#fff",
          searchButtonContainerColorHover: "#FFA500",
        }}
      />
      <Search
        config={{
          placeholder: "Search",
          color: "#000",
          backgroundColor: "#ffffff",
          border: "2px solid #fff",
          placeholderWeight: "bold",
          placeholderColor: "#000000",
          fontWeight: "bold",
          searchButtonColor: "#000",
          searchButtonColorHover: "",
          searchButtonContainerColor: "#ffffff",
          searchButtonContainerColorHover: "lightblue",
        }}
      />

      <Search
        config={{
          placeholder: "Search",
          color: "#000",
          backgroundColor: "#ffffff",
          border: "2px solid #fff",
          placeholderWeight: "bold",
          placeholderColor: "rgba(0,0,0,0.5)",
          fontWeight: "bold",
          searchButtonColor: "#fff",
          searchButtonColorHover: "",
          searchButtonContainerColor: "#000",
          searchButtonContainerColorHover: "#00C5E5",
        }}
      />

      <Search
        config={{
          placeholder: "Search",
          color: "#ffffff",
          backgroundColor: "#999AC6",
          border: "2px solid #fff",
        }}
      />
    </Container>
  );
}

export default App;
