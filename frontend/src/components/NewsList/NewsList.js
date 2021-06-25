import News from "../News/News";
import { useContext } from "react";
import { NewContext } from "../../context/NewProvider";

const NewsList = () => {
  const { news } = useContext(NewContext);

  news.map((item) => {
    return <News key={item.news_id} props={item}></News>;
  });

  return (
    <div className="body">
      {news.length > 0 ? (
        news.map((item) => {
          return <News key={item.news_id} props={item}></News>;
        })
      ) : (
        <h1>Não há noticias para esse estado!</h1>
      )}
    </div>
  );
};

export default NewsList;
