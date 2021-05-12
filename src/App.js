import { useState } from 'react';
import NewsCard from './components/NewsCard/NewsCard';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.css';

//import Login from './Login/Login';

const text = `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum.`;


function App() {

  const [news, setNews] = useState(
    [
      {
        id: 1,
        image: `https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/
        e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg`,
        title: "Titulo 1",
        text: text
      },
      {
        id: 2,
        image: `https://pm1.narvii.com/6340/818cf5d1a6a2f6693413168c50ab0b64177f49c2_hq.jpg`,
        title: "Titulo 2",
        text: text
      },
      {
        id: 3,
        image: `https://miro.medium.com/max/485/1*NPFbsnC4K9b5xPbEz6LoJw.jpeg`,
        title: "Titulo 3",
        text: text
      }
    ]
  )

  return (
    <div className="App">
      <Header></Header>
      <NewsCard news={news}></NewsCard>
    </div>
  );
}

export default App;
