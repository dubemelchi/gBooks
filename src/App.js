import React, { useState } from "react";
import axios from "axios";
import BookSearchForm from "./components/bookSearchForm";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join("and");
    } else if (authors.lenght > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
    return authors;
  };

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <section>
      <BookSearchform
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      {loading && (
        <div style={{ color: `green` }}>
          fetching books for "<strong>{searchTerm}</strong>"
        </div>
      )}

      <ul>
        {books.items.map((book, index) => {
          return (
            <li key={index}>
              <div>
                <img
                  src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  alt={`${book.volumeInfo.title} book`}
                />
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{bookAuthors(book.volumeInfo.authors)}</p>
                  <p>{book.volumeInfo.publishedDate}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default App;
