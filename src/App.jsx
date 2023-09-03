import "./App.css";
import Hero from "./pages/hero";
import Payments from "./pages/payments";
import Boost from "./pages/boost";
import Investing from "./pages/investing";
import Banking from "./pages/banking";
import FooterNew from "./pages/newFooter";

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden">
        <Hero />
        <Payments />
        <Banking />
        <Boost />
        <Investing />
        <div className="lg:hidden">
          <FooterNew />
        </div>
      </div>
    </>
  );
}

export default App;
