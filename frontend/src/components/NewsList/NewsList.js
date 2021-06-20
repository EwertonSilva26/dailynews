import News from '../News/News';
import { useContext } from 'react';
import { NewContext } from '../../context/NewProvider'

const NewsList = () => {
  
  const { news } = useContext(NewContext); 

  return (
    <div className="body">
      {news.map((item) => {
        return <News key={item.idNew} props={item}></News>;
      })}
    </div>
  );
};

export default NewsList;
