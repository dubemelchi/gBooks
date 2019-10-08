import React from "react";

// import bookWhatever i name it when i get there lol

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
