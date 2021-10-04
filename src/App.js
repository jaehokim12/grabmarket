import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import {Switch, Route} from 'react-router-dom';
import UploadPage from './components/Upload';
import ProducPage from './components/Product';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact={true} path ={"/"}>
            <MainPage/>
          </Route>
          <Route exact={true} path ={"/product"}>
            <ProducPage/>
          </Route>
          <Route exact={true} path ={"/upload"}>
            <UploadPage/>
          </Route>
         </Switch>
    </div>
  );
}

export default App;
