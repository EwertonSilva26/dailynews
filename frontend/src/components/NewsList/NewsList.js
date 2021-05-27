import News from '../News/News';

const NewsList = ({ news }) => {
  return (
    <div className="body">
      {news.map((item) => {
        return <News key={item.idNew} props={item}></News>;
      })}
    </div>
  );
};

export default NewsList;
