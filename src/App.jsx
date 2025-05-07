import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, SparkleEffect } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        {/* StarCanvas in background */}
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>

        {/* Main content above the background */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <SparkleEffect />
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <Contact />
          <SparkleEffect />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
