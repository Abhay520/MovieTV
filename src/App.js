import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {Routes, Route } from "react-router-dom";
import { Header } from './features/Header.jsx';
import { TopAiring } from './features/TopAiring.jsx';
import { MostPopular } from "./features/MostPopular.jsx";
import { RecentTV } from "./features/RecentTv.jsx";
import { RecentMovies } from "./features/RecentMovies.jsx";

function App() {

  return (
    <div className="container-fluid App">
      <div className='row d-flex align-items-center mb-4'>
				<Header/>
        <Routes>
          <Route path = "/" element = {<TopAiring/>}/>
          <Route path = "/MostPopular" element = {<MostPopular/>}/>
          <Route path = "/RecentMovies" element = {<RecentMovies/>}/>
          <Route path = "/RecentTv" element = {<RecentTV/>}/>
          <Route path = "/TopAiring" element = {<TopAiring/>}/>
        </Routes>
      </div>
      <div className = 'row'>
      </div>
    </div>
  );
}

export default App;
