import iconSearch from "@/assets/icon-search.svg";

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="search-section__left">
        <img
          className="search-section__icon"
          alt="icon-search"
          src={iconSearch.src}
        ></img>
        <input
          type="text"
          className="search-section__input"
          placeholder="Search Github username..."
        ></input>
      </div>
      <button className="search-section__btn">Search</button>
    </section>
  );
};

export default SearchSection;
