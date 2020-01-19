import * as React from 'react';
import * as style from './style.scss';
import CartoonItem from './CartoonItem';

export default function CartoonContent () {
  return (
    <div className={style.a}>
      <CartoonItem tag="漫画一" />
      <CartoonItem tag="漫画二" />
    </div>
  );
}
