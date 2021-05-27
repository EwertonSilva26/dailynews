import News from '../News/News';

const NewsList = ({ props }) => {
  return (
    <div className="body">
      {props.map((item) => {
        return <News key={item.idNew} props={item}></News>;
      })}
    </div>
  );
};

export default NewsList;
