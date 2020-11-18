import React from "react";
import Button from "./Button";
import { ReactComponent as Minus } from "../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";
import { ReactComponent as Cross } from "../assets/icons/cross.svg";

const CartItem = ({
  id,
  name,
  type,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
}) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={handleMinusItem}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <Minus />
        </div>
        <b>{totalCount}</b>
        <div
          onClick={handlePlusItem}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <Plus />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} ₽</b>
      </div>
      <div className="cart__item-remove">
        <Button onClick={handleRemoveClick} className="button--circle" outline>
          <Cross />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
