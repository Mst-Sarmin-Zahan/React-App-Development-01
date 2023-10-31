import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Service from "./components/Service";
import Hero from "./components/hero";
import Temperature from "./components/exam";



const App = ()=>{

  return(
<div>
 <Temperature/>
 <Header/>
 <Hero/>
 <About/>
 <Service/>
 <Project/>
 <Footer/>

</div>

);



}
export default App;