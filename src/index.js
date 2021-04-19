import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { Books } from "./Books.js"
import Book from "./Book"
//variables


function BookList() {
  return (
    <section className="booklist">
      {Books.map((book) => {
        // we are sending a prop of book
        return <Book key={book.id} /*book={book}*/ {...book}> </Book> /* {...book} <--- Spread operator */
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
