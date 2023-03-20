import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/Row/Row';
import { originals,ComedyMovies,HorrorMovies,ActionMovies, RomanceMovies } from './Constants/url';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Banner />
         <RowPost title='Originals' url={originals}/>
         <RowPost title='Comedy' isSmall url={ComedyMovies}/>
         <RowPost title='Horror' isSmall url={HorrorMovies}/>
         <RowPost title='Action' isSmall url={ActionMovies}/>
         <RowPost title='Rommance' isSmall url={RomanceMovies}/>
    </div>
  );
}

export default App;
