import "./App.css";
import Banking from "./componenets/banking";
import Boost from "./componenets/boost";
import Hero from "./componenets/hero";
import Investing from "./componenets/investing";
import FooterNew from "./componenets/newFooter";
import Payments from "./componenets/payments";

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
