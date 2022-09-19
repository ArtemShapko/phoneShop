import { useState } from 'react';

const Categories = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickActiveIndex = (n) => {
    setActiveIndex(n);
  };
  const categoriesData = ['Все', '2021', '2020', '2019', '2018', '2017'].map((value, index) => {
    return (
      <li
        key={index}
        // onClick={() => onClickActiveIndex(index)}
        onClick={() => props.onChangeCategory(index)}
        // className={activeIndex === index ? 'active' : ''}
      >
        {value}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoriesData}</ul>
    </div>
  );
};

export default Categories;
