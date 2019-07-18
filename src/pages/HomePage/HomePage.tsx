import React from 'react';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component<ICommonProps> {
  render() {
    return (
      <Redirect to="/cars" />
    )
  }
}

export default HomePage;
