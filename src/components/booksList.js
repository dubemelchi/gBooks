/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import { bookAuthors } from '../utils/index';

const Book = ({ book }) => {
  return (
    <li>
      <div>
        <img
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          alt={`${book.volumeInfo.title} book`}
        />
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>{bookAuthors(book.volumeInfo.authors)}</p>
          <p>{book.volumeInfo.publishedDate}</p>
          <Link to={`/book/${book.id}`}>Show details</Link>
        </div>
      </div>
    </li>
  );
};

const BookList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BookList;
