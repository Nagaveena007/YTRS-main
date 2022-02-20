import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getBooksAction } from "../redux/actions";
import { useState } from "react";

const FoodStore = ({ book }) => {
  const [foodSelected, setFoodSelected] = useState(null);

  /* 
  componentDidMount = async () => {
    this.props.getBooks()
  }; */

  changeBook = (book) => setFoodSelected({ foodSelected: book });

  return (
    <Row>
      <Col md={4}>
        <BookList
          setFoodSelected={foodSelected}
          changeBook={changeBook}
          books={booksInStock}
          errorCode={errorCode}
        />
      </Col>
      <Col md={8}>
        <BookDetail setFoodSelected={foodSelected} />
      </Col>
    </Row>
  );
};

export default BookStore;
