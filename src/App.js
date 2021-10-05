import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import MainPage from './components/MainPage';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import UploadPage from './components/Upload';
import ProducPage from './components/Product';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push('/upload'); // 해당 경로에서 다른경로로 이동
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
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
