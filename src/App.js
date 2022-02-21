import "./App.css";
import LandingTopPage from "./components/LandingTopPage";
import NavBar from "./components/NavBar";
import ProductFeature from "./components/ProductFeature";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingTopPage />
      <ProductFeature />
    </div>
  );
}

export default App;
