import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const [books, setBooks] = useState({ items: [] });

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join('and');
    } else if (authors.lenght > 2) {
      let lastAuthor = ' and ' + authors.slice(-1);
      authors.pop();
      authors = authors.join(', ');
      authors += lastAuthor;
    }
    return authors;
  };

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor=''>
          <span>Search for books</span>
          <input
            type='search'
            placeholder='something something'
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type='submit'>search</button>
        </label>
      </form>
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
