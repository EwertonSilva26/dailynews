import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//import Login from './Login/Login';
import Header from './Header/Header';
import NewsCardModel from '../model/NewsCardModel';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <NewsCardModel></NewsCardModel>
    </div>
  );
}

export default App;
