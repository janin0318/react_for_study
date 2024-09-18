import ForItem from "./ForItem";

export default function ForSort({books}) {
  books.sort((a, b) => a.price - b.price);
  return (
      <dl>
        {
          books.map(book => <ForItem key={book.isbn} book={book}/>)
        }
      </dl>
  )
}
