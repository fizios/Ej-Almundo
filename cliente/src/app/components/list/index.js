import React from 'react';
import {Container, Row} from 'reactstrap';
import Item from "./item";

const List = (props) => {

  const {hotels} = props;

  return hotels.map(h => <Item key={h.id} hotel={h}/>);
};

export default List;