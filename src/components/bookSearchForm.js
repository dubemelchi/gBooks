import React from "react";

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="">
        <span>Search for books</span>
        <input
          type="search"
          placeholder="something something"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button type="submit">search</button>
      </label>
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;
