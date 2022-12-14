import React, { useState } from 'react';

const PhoneBlock = (props) => {
  const typeNames = ['ru', 'en'];
  const [activeType, setActiveTupe] = useState(0);
  const [activeSize, setActivesSize] = useState(0);
  const findActiveType = (index) => {
    setActiveTupe(index);
  };
  const findActiveSize = (index) => {
    setActivesSize(index);
  };

  return (
    <div className="phone-block-wrapper">
      <div className="phone-block">
        <img className="phone-block__image" src={props.imageUrl} alt="phone" />
        <h4 className="phone-block__title">{props.title}</h4>
        <div className="phone-block__selector">
          <ul>
            {props.types.map((value, index) => {
              return (
                <li
                  key={index}
                  onClick={() => findActiveType(index)}
                  className={activeType === index ? 'active' : ''}>
                  {typeNames[value]}
                </li>
              );
            })}
          </ul>
          <ul>
            {props.sizes.map((value, index) => {
              return (
                <li
                  key={index}
                  onClick={() => findActiveSize(index)}
                  className={activeSize === index ? 'active' : ''}>
                  {props.sizes[index]} GB.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="phone-block__bottom">
          <div className="phone-block__price">от {props.price} ₽</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneBlock;
