import React, {Component} from 'react';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from  'reactstrap';
import Header from '../header'
import Filters from "../filters";
import List from "../list";

class Main extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const {hotels ,getHotels} = this.props;

    return (
      <div>
        <Header/>
        <Container fluid>
          <Row>
            <Col xs="12" lg="3" >
              <div className="filters-container">
                <Filters search={getHotels}/>
              </div>
            </Col>
            <Col xs="12" lg="9">
              <div className="list-container">
                <List hotels={hotels}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main;