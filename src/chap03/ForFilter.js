import React from 'react';
import ForItem from "./ForItem";

export default function ForFilter({books}) {
  const lowPrice = books.filter(book => book.price < 3600);
  return (
      <dl>
        {
          lowPrice.map(book => <ForItem key={book.isbn} book={book}/>)
        }
      </dl>
  )
}
