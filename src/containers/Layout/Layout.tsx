import React from 'react';
import injectSheet from 'react-jss';
import Header from './Header';
import Footer from './Footer';
import style from './style';

interface IProps extends ICommonProps {}

class Layout extends React.Component<IProps> {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <Header />

        <div className={classes.content}>
          {children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default injectSheet(style as any)(Layout);
