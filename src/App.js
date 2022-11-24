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
          fontWeight: 'bold',
          searchButtonColorHover: '#ffffff',
          searchButtonContainerColorHover: '#FFA500',
        }}
      />
      <Search
        config={{
          placeholder: "Search",
          color: "#000",
          backgroundColor: "#ffffff",
          border: "2px solid #fff",
          placeholderWeight: "bold",
          placeholderColor: '#000000',
          fontWeight: 'bold',
          searchButtonColor: 'blue',
          searchButtonColorHover: '#000000',
          searchButtonContainerColor: '#ffffff',
          searchButtonContainerColorHover: 'red',
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
