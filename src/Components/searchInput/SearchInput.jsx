import Image from "next/image";
function SearchInput({ icon, holder, type, border, alt, classes }) {
  return (
    <span className="searchInputBox">
      <input
        className={`searchInput  ${classes}`}
        type={type}
        placeholder={holder}
      />
      <button
        className="searchIcon border-0 bg-transparent "
        aria-label="search button"
      >
        <Image src={icon} alt={alt} />
      </button>
    </span>
  );
}

export default SearchInput;
