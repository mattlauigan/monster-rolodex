import "./search-box.style.css";

const searchBox = ({ className, placeHolder, onChangeHandler }) => (
  // const { onSearchChange } = this.props;

  <input
    type="search"
    className={`searchBox ${className}`}
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);

export default searchBox;
