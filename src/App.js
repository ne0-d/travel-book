import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import './App.css';
const card = data.map((item)=>{
  
  return(
    <Card
      item = {item}/>
  );
});
function App() {
  return (
    <div className="container">
      <Navbar />
      <div class="card--list">{card}</div>
    </div>
  );
}

export default App;
