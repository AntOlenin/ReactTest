import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Select from '../../components/Select';
import Button from '../../components/Button';
import style from './style';

interface IProps {
  classes: Classes;
}

class Filter extends React.PureComponent<IProps> {
  handleSubmit = () => {
    debugger
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Select
          label="Color"
          value={'1'}
          options={[
            { value: '1', text: 'bmw' },
            { value: '2', text: 'audi' },
            { value: '3', text: 'mini' }
          ]}
          onChange={() => {debugger}}
        />
        <Select
          className={classes.manufacturer}
          label="Manufacturer"
          value={'1'}
          options={[
            { value: '1', text: 'bmw' },
            { value: '2', text: 'audi' },
            { value: '3', text: 'mini' }
          ]}
          onChange={() => {debugger}}
        />

        <div className={classes.actions}>
          <Button
            text="Filter"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default injectSheet(style as any)(Filter);
