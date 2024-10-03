import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex w-full">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
