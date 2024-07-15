import React from "react";
import Image from "next/image";
import close from "../../../public/Assets/Icons/close.png";
function CartTableItem({
  productImage,
  productName,
  price,
  quantity,
  subtotal,
}) {
  return (
    <tr className="">
      <th scope="row">
        <td className="productTd d-flex align-items-center">
          <span className="productIdImage me-4 position-relative">
            <span className="position-absolute deleteItemBox">
              <Image src={close} alt="close" />
            </span>
            <Image src={productImage} alt="lcd" />
          </span>
          <p className="m-0">{productName}</p>
        </td>
      </th>
      <td className="py-3 px-4">
        <p className="m0">{price}</p>
      </td>
      <td className="py-3 px-4">
        <input type="number" />
      </td>
      <td className="py-3 px-4">
        <p className="m0">{subtotal}</p>
      </td>
    </tr>
  );
}

export default CartTableItem;
