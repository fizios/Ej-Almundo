import React from 'react'
import {Button, Collapse, Card, CardBody} from 'reactstrap'
import Name from "./name";
import Stars from "./stars";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    const collapse = this.state.collapse ? "open" : "";
    const {search} = this.props;

    return (
      <div>
        <div className="filter-mobile">
          <Button color="link" onClick={this.toggle} className='filter'>
            Filtrar {collapse ? (<span>&#9650;</span>) : <span>&#9660;</span>}
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Name search={search} />
            <Stars search={search} />
          </Collapse>
        </div>


        <div className="filter-desk">
          <div className='filter'>Filtros</div>
          <Name search={search} />
          <Stars search={search} />
        </div>
      </div>
    );
  }
}

export default Filters;