import  Slider  from "./design-system/slider/index";
import "./App.scss";
import Navbarmenu from "./component/header/Header";
import Header from "./component/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './design-system/Card/index'
import AboutSection from "./component/about";

function App() {
  const data = [1,2,3,4,5,6,7,8, 9]
  return (
    <div className="App">
      <div className="container-fluid p-0">
    
        <Navbarmenu />
        <Slider />
        <p className="trending-heading">Trending Items</p>
        <div className="card-section">
     
        {
          data.map((ele)=>{
            return(
              <Card />
            )
          })
        }
     
      
        </div>
        <AboutSection/>
      </div>
    </div>
  );
}

export default App;
