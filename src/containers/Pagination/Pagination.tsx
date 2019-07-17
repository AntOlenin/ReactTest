import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import { Classes } from '../../theme';
import { ReduxState } from '../../types';
import style from './style';

interface IProps {
  classes: Classes;
  totalPageCount?: number;
}

class Pagination extends React.PureComponent<IProps> {
  render() {
    const { classes, totalPageCount } = this.props;
    const linkClassName = classnames(classes.link, classes.item);

    return (
      <div className={classes.root}>
        <Link to="#" className={linkClassName}>First</Link>
        <Link to="#" className={linkClassName}>Previous</Link>
        <Text size="s" className={classes.item}>Page 2 of {totalPageCount}</Text>
        <Link to="#" className={linkClassName}>Next</Link>
        <Link to="#" className={linkClassName}>Last</Link>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { totalPageCount } = state.meta;
  return { totalPageCount };
};

// @ts-ignore
export default connect(mapStateToProps)(injectSheet(style as any)(Pagination));
