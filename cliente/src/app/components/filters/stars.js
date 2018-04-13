import React from 'react';
import {Button, Collapse} from 'reactstrap';

class Stars extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.state = { collapse: false, selected: 0 };
  }

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

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onInputChange(value) {
    this.setState({
      selected: value
    });
    this.props.search({stars: value})
  }

  render() {

    const collapse = this.state.collapse ? "open" : "";

    const stars = [0, 5, 4, 3, 2, 1];

    return (
      <React.Fragment>
        <div className="filter-by-stars">
          <Button color="link" onClick={this.toggle} className="filter">
            <i className="stars svg"/>
            Estrellas {collapse ? (<span>&#9650;</span>) : <span>&#9660;</span>}
          </Button>
          <Collapse isOpen={this.state.collapse} className='form'>
            {stars.map(s => (
              <div key={s}>
                <input type="checkbox" value={s} onChange={(e) => {this.onInputChange(s)}} checked={this.state.selected === s}/>
                {this.renderStars(s)}
              </div>
            ))}
          </Collapse>
        </div>

      </React.Fragment>
    );
  }
}

export default Stars;