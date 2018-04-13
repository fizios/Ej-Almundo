import React from 'react';
import MainComponent from '../../components/main';
import {connect} from 'react-redux';
import { getHotels } from '../../actions/hotels'


class Main extends React.Component {

  componentWillMount() {
    this.props.getHotels();
  }

  render() {
    return (
      <MainComponent {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  hotels: state.hotels,
  filters: state.filters
});

const dispatchActionsToProps = {
  getHotels
};

export default connect(mapStateToProps, dispatchActionsToProps)(Main);
