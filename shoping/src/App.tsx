//styles
import "./App.css";
//conmponents
import Header from "./Components/TopHeader/TopHeader";
import GlobalHeader from "./Components/GlobalHeader/GlobalHeader";
import TopCatalog from "./Components/TopCatalog/TopCatalog";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Account/Account";
import Catalog from "./Pages/Catalog/Catalog";
import Savat from "./Pages/Savat/Savat";
import Yoqtirilgan from "./Pages/Yoqtirilgan/Yoqtirilgan";
import Manzil from "./Pages/Manzil/Manzil";
import Buyurtmalarim from "./Pages/Buyurtmalarim/Buyurtmalarim";
import SavolJavob from "./Pages/SavolJavoblar/SavolJavob";

//React-Router-Dom
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalHeader />
      <TopCatalog />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Savat" element={<Savat />} />
        <Route path="/Yoqtirilgan" element={<Yoqtirilgan />} />
        <Route path="/Manzil" element={<Manzil />} />
        <Route path="/SavolJavob" element={<SavolJavob />} />
        <Route path="/Buyurtmalarim" element={<Buyurtmalarim />} />
      </Routes>
    </div>
  );
}

export default App;
