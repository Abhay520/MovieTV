import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {Routes, Route } from "react-router-dom";
import { Header } from './features/Header.jsx';
import { TopAiring } from './features/TopAiring.jsx';
import { HighestRated } from "./features/HighestRated.jsx";
import { MostPopular } from "./features/MostPopular.jsx";
import {Movie} from "./layout/Movie.jsx"
import { TVSeries } from "./layout/TVSeries.jsx";

function App() {
  return (
    <div className="container-fluid App">
      <div className='row d-flex align-items-center mb-4'>
				<Header/>
        <Routes>
          <Route path = "/" element = {<TopAiring/>}/>
          <Route path = "/HighestRated" element = {<HighestRated/>}/>
          <Route path = "/MostPopular" element = {<MostPopular/>}/>
          <Route path = "/TopAiring" element = {<TopAiring/>}/>
          <Route path = "/Movie/:id" element = {<Movie/>}/>
          <Route path = "/Tv/:id" element = {<TVSeries/>}/>
        </Routes>
      </div>
      <div className = 'row'>
      </div>
    </div>
  );
}

export default App;
