import React from 'react';
import './BasketItem.css';
import { observer } from 'mobx-react';

const BasketItem = observer(({ name, price, count, onTake }) => {
  return (
    <div className="BasketItem" onClick={() => onTake(name)}>
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return">갖다놓기</div>
    </div>
  );
});

export default BasketItem;
