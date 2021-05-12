import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//import Login from './Login/Login';
import Header from './Header/Header';
import NewsCard from './NewsCard/NewsCard';

const text = `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum.`;

const image1 = `https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/
e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg`;

const image2 = `https://store.playstation.com/store/api/chihiro/00_09_000/container/SG/
en/99/HP9000-NPHO00170_00-UAGOWAKRATOSMAN0/0/image?_version=00_09_000&platform=chihiro&bg_
color=000000&opacity=100&w=720&h=720`;

const image3 = `https://miro.medium.com/max/485/1*NPFbsnC4K9b5xPbEz6LoJw.jpeg`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NewsCard image={image1} title="Notícia 1" text={text}></NewsCard>
      <NewsCard image={image2} title="Notícia 2" text={text}></NewsCard>
      <NewsCard image={image3} title="Notícia 3" text={text}></NewsCard>
    </div>
  );
}

export default App;
