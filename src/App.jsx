import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex">
      <Header />
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
