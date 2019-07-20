import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import get from 'lodash/get';
import theme from './../../../theme';
import Header from './Header';


describe('<Header />', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );

  const json = component.toJSON();

  it('should render <Logo />', () => {
    const linkDataTestId = get(json, ['children', 0, 'props', 'data-test-id']);
    expect('logo').toBe(linkDataTestId);
  });

  it('should render "My Orders" <Link to="/favorites" />', () => {
    const favoritesLink = get(json, ['children', 1, 'children', 1]);
    expect('/favorites').toBe(favoritesLink.props.href);
  });
});

export default undefined;
