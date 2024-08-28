
import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './createBlog';


function App() {
  
  return (
 
    <div className="App">

      <Navbar/>
      <div className="content">
    <Home/>
       <CreateBlog/>
      </div>
    </div>
   
  );
}

export default App;
