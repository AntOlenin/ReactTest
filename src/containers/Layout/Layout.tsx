import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import { IReduxState } from '../../types';
import style from './style';

interface IProps extends ICommonProps {
  contentClassName?: string;
}

class Layout extends React.PureComponent<IProps> {
  componentDidMount() {
    debugger
  }

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

const mapStateToProps = (state: IReduxState) => {
  return { error: state.error };
};

export default connect(mapStateToProps)(injectSheet(style)(Layout));
