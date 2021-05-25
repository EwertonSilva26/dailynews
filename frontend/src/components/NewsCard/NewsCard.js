import './NewsCard.css';

import New from '../New/New';

const NewsCard = ({ news }) => {
  return (
    <div>
      {news.map((item) => {
        return (
          <New props={item}></New>
        );
      })}

    </div>
  );
};

export default NewsCard;
