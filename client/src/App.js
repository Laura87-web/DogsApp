
import './App.css';
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import FormAdd from "./components/FormAdd/FormAdd"
import Detail from "./components/Detail/Detail"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route
              exact
              path ='/'
              component={Landing} // tambien funciona: render={() => <Landing/>}
      />
      <Route
              exact
              path ='/dogs'
              component={Home} 
      />
      <Route exact path='/dog' 
            component={FormAdd}/>

      <Route path='/dogs/:id' 
            component={Detail}/>
      
    </div>
  );
}

export default App;
