import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import Text from '../../components/Text';
import style from './style';

export interface IOption {
  value: string;
  text: string;
}

interface IProps extends ICommonProps {
  name: string;
  label: string;
  value: string;
  options: Array<IOption>;
  onChange: (args: { name: string; value: string; }) => void;
}

interface IState {
  expanded: boolean;
}

class Select extends React.PureComponent<IProps, IState> {
  state: IState = {
    expanded: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.props.onChange({ name, value });
  };

  renderNativeSelect() {
    const { classes, options, name } = this.props;

    return (
      <select name={name} className={classes.nativeSelect} onChange={this.handleChange}>
        {options.map(({ value, text }) => {
          return <option value={value}>{text}</option>
        })}
      </select>
    )
  }

  render() {
    const { classes, className, options, label, value } = this.props;

    if (!options.length) {
      return null;
    }

    const rootClassName = classnames(classes.root, className && className);
    const currentOption = options.find(option => option.value === value);

    return (
      <div className={rootClassName}>
        <label>
          <Text size="s">{label}</Text>
        </label>

        <div className={classes.select}>
          {currentOption.text}

          {this.renderNativeSelect()}
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(Select);
