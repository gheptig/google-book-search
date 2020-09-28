import React, { Component } from "react";
import Results from "../Results/Results.js";
import Modal from "../Modal/Modal";
import { Jumbotron, Row, Col, Form, Button } from "react-bootstrap";
import Axios from "axios";

export default class index extends Component {
  state = {
    searchInput: "",
    showModal: false,
    modalText: "",
    bookData: [],
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const searchInput = this.state.searchInput;

    if (!this.state.searchInput) {
      this.setState({ showModal: true, modalText: "Please enter an input" });
    } else {
      Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
        .then((response) => {
          console.log(response);
          if (response.data.totalItems === 0) {
            this.setState({
              showModal: true,
              modalText: "No results, please try a different search",
            });
          } else {
            this.setState({ bookData: response.data.items });
            console.log(this.state.bookData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ searchInput: "" });
    }
  };

  render() {
    return (
      <>
        <Row className="mx-auto mt-3">
          <Col md={10} className="mt-3 mx-auto text-white">
            <Jumbotron className="bg-danger">
              <Row className="mx-auto">
                <Col md={12}>
                  <h2 className="mb-2"> Books Search</h2>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Search for book"
                        name="searchInput"
                        value={this.state.searchInput}
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Button
                      variant="warning"
                      className="float-right"
                      onClick={this.handleSearch}
                    >
                      Search
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Results state={this.state} />
        <Modal state={this.state} handleClose={this.handleClose} />
      </>
    );
  }
}
