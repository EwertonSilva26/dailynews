import New from '../New/New';

const NewsList = ({ news }) => {
  return (
    <div className="body">
      {news.map((item) => {
        return <New key={item.idNew} props={item}></New>;
      })}
    </div>
  );
};

export default NewsList;
