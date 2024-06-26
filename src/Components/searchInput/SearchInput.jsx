import React from "react";

import Image from "next/image";
function SearchInput({ icon, holder, type, border, alt, classes }) {
  return (
    <span className="searchInputBox">
      <input
        className={`searchInput  ${classes}`}
        type={type}
        placeholder={holder}
      />
      <span className="searchIcon">
        <Image src={icon} alt={alt} />
      </span>
    </span>
  );
}

export default SearchInput;
