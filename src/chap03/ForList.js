import React from "react";

export default function ForList({src}) {
  const bookList = src.map(elem =>
      <React.Fragment key={elem.isbn}>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </React.Fragment>
  )
  return <dl>{bookList}</dl>
}
