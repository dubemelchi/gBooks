import React from "react";

const Loader = ({ loading, searchTerm }) => {
  return (
    <div>
      {loading && (
        <div style={{ color: `green` }}>
          fetching books for "<strong>{searchTerm}</strong>"
        </div>
      )}
    </div>
  );
};

export default Loader;
