import iconSearch from "@/assets/icon-search.svg";

interface SearchSectionProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchSection = ({ onClick, onChange }: SearchSectionProps) => {
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
          onChange={onChange}
        ></input>
      </div>
      <button className="search-section__btn" onClick={onClick}>
        Search
      </button>
    </section>
  );
};

export default SearchSection;
