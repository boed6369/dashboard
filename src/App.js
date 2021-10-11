import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';
import './App.css';

function App() {
  return(
    <div className="App">
      <p className="menu"><Menu/></p>
      <p className="reviews"><Reviews /></p>
      <p className="rating"> <Rating/></p>
      <p className="sentiment"><Sentiment/> </p>
      <p className="visitors"><Visitors/></p>
    </div>
  )
}

export default App;
