import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// import Login from './Login/Login';
import Header from './Header/Header';
// import NewsCardModel from '../model/NewsCardModel';
import NewsCardController from '../controllers/NewsCardController';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Login></Login> */}
       <NewsCardController></NewsCardController>
    </div>
  );
}

export default App;
