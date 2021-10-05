import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import { Switch, Route } from 'react-router-dom';
import UploadPage from './components/Upload';
import ProducPage from './components/Product';

function App() {
  return (
    <div className="App">
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={'/'}>
            <MainPage />
          </Route>
          <Route exact={true} path={'/products/:id'}>
            <ProducPage />
          </Route>
          <Route exact={true} path={'/upload'}>
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
