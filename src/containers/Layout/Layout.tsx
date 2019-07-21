import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import Header from './Header';
import Footer from './Footer';
import style from './style';

interface IProps extends ICommonProps {
  contentClassName?: string;
}

class Layout extends React.PureComponent<IProps> {
  render() {
    const { classes, children } = this.props;
    const contentClassName = classnames(classes.content, this.props.contentClassName);

    return (
      <div className={classes.root}>
        <Header />

        <div className={contentClassName}>
          {children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default injectSheet(style)(Layout);
