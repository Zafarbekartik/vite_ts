//styles
import "./App.css";
//conmponents
import Header from "./Components/TopHeader/TopHeader";
import GlobalHeader from "./Components/GlobalHeader/GlobalHeader";
import TopCatalog from "./Components/TopCatalog/TopCatalog";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalHeader />
      <TopCatalog />
    </div>
  );
}

export default App;
