import New from '../New/New';

const NewsList = ({ props }) => {
  return (
    <div className="body">
      {props.map((item) => {
        return <New key={item.idNew} props={item}></New>;
      })}
    </div>
  );
};

export default NewsList;
