import React from "react";

const Book = (props) /*  the object that we are receving by name props */ => {
  // for event handling
  //attribute, eventHandler
  const clickHandler = () => {
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  //Destructuring
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img}></img>
      <h1>{title}</h1>
      <h4 onClick={() => complexExample(author)}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        OnClick
      </button>
    </article>
  );
};

export default Book;
