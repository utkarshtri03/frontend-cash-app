import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./pages/hero";
import Payments from "./pages/payments";
import Boost from "./pages/boost";
import Investing from "./pages/investing";
import Banking from "./pages/banking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden">
        <Hero />
        <Payments />
        <Banking />
        <Boost />
        <Investing />
      </div>
    </>
  );
}

export default App;
