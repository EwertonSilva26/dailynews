import News from '../News/News';
import { useContext } from 'react';
import { NewContext } from '../../context/NewProvider'
import { UfsContext } from '../../context/UfsProvider'

const NewsList = () => {
  
  const { news } = useContext(NewContext); 
  const { uf } = useContext(UfsContext); 

  return (
    <div className="body">
      {news.map((item) => {
          if(item.uf === uf || uf === 0) {
            return <News key={item.idNew} props={item}></News>;
         }
      })}
    </div>
  );
};

export default NewsList;
