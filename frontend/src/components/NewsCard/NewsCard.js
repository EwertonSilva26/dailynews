import New from '../New/New';

const NewsCard = ({ news }) => {
  return (
    <div>
      {news.map((item) => {
        return (
          <New key={item.idNew} props={item}></New>
        );
      })}

    </div>
  );
};

export default NewsCard;
