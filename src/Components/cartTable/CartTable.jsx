import React from "react";
import Image from "next/image";
import lcd from "../../../public/Assets/Images/samsung.png";
import CartTableItem from "../cartTableItem/CartTableItem";
import joy from "../../../public/Assets/Images/joy.png";
function CartTable() {
  return (
    <div className="overflow-auto">
    <table className="table col-12">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <CartTableItem
          productImage={lcd}
          price={"$650"}
          productName={"LCD Monitor"}
          subtotal={"$650"}
        />
        <CartTableItem
          productImage={joy}
          price={"$650"}
          productName={"LCD Monitor"}
          subtotal={"$650"}
        />
        <CartTableItem
          productImage={joy}
          price={"$650"}
          productName={"LCD Monitor"}
          subtotal={"$650"}
        />
      </tbody>
    </table>
    </div>
  );
}

export default CartTable;
