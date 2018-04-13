import React from 'react';
import {Col, Row} from 'reactstrap';

class Item extends React.Component {

  renderStars(q) {

    if (q === 0) {
      return (<span>Todas las Estrellas</span>)
    }

    const stars = [];

    for(let i=0; i < q; i++) {
      stars.push( (<i key={i} className="stars svg"/> ) )
    }

    return stars;

  }

  renderAmenities(amenities) {
    return amenities.map(a => <img key={a} src={`/icons/amenities/${a}.svg`} width={30}/>);
  }

  render() {

    const hotel = this.props.hotel;

    return (
      <div className="item-container">
        <Row>
          <Col xs='12' lg={3}>
            <div className={`image`}>
              <img src={`/images/hotels/${hotel.image}`} />
            </div>
          </Col>
          <Col xs='12' lg={5}>
            <div className={`details`}>
              <div className='name'>{hotel.name}</div>
              <div className='stars'>{this.renderStars(hotel.stars)}</div>
              <div className='amenities'>{this.renderAmenities(hotel.amenities)}</div>
            </div>
          </Col>
          <Col xs='12' lg={4}>
            <div className={`cta`}>
              <div>Precio por noche por habitacion</div>
              <div className={`price`}>ARS {hotel.price}</div>
              <div><button>Ver Hotel</button></div>
            </div>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Item;