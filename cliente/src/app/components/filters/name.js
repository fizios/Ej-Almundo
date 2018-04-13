import React from 'react'
import {Button, Collapse} from 'reactstrap'

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onInputChange(e) {
    const value = e.currentTarget.value;
    this.setState({
      hotel: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    //llamar accion
    this.props.search({name: this.state.hotel})
  }

  render() {

    const collapse = this.state.collapse ? "open" : "";

    return (
      <React.Fragment>
        <div className="filter-by-name">
          <Button color="link" onClick={this.toggle} className="filter">
            <i className="search svg"/>
            Nombre {collapse ? (<span>&#9650;</span>) : <span>&#9660;</span>}
          </Button>
          <Collapse isOpen={this.state.collapse} className='form'>
            <input type="text" placeholder="Ingrese el nombre del hotel" onChange={this.onInputChange}/>
            <Button onClick={this.onSubmit}> Aceptar </Button>
          </Collapse>
        </div>

      </React.Fragment>
    );
  }
}

export default Name;