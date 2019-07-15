import React from 'react';
import { Link } from 'react-router-dom';

class CarListPage extends React.Component {
  render() {
    return (
      <div>
        CarListPage
        <Link to={`/car/1`}>hasd</Link>
      </div>
    )
  }
}

export default CarListPage;
