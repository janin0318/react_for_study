import React from "react";
import ForItem from "./ForItem";

export default function ForList({src}) {
  const bookList = src.map(elem =>
      <ForItem book={elem} />
  )
  return <dl>{bookList}</dl>
}
