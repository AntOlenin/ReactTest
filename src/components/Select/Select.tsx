import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import Text from '../../components/Text';
import Option from './Option';
import { IOption } from './Option/Option';
import style from './style';

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

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  handleOptionClick = (value: string) => {
    const { name, onChange } = this.props;
    onChange({ name, value });
    this.setState({ expanded: false });
  };

  renderLabel() {
    const { label } = this.props;

    return (
      <label>
        <Text size="s">{label}</Text>
      </label>
    )
  }

  renderSelect() {
    const { classes, options, value } = this.props;
    const { expanded } = this.state;
    const currentOption = options.find(option => option.value === value);

    const selectClassName = classnames(classes.select, {
      [classes.expanded]: expanded,
      [classes.collapsed]: !expanded,
    });

    return (
      <div className={selectClassName} onClick={this.handleClick}>
        {currentOption.text}
      </div>
    );
  }

  renderOptions() {
    const { classes, options } = this.props;
    const { expanded } = this.state;

    if (!expanded) {
      return null;
    }

    return (
      <div className={classes.options}>
        {options.map((option) => {
          return <Option key={option.value} option={option} onClick={this.handleOptionClick} />
        })}
      </div>
    );
  }

  render() {
    const { classes, className, options } = this.props;

    if (!options.length) {
      return null;
    }

    const rootClassName = classnames(classes.root, className && className);

    return (
      <div className={rootClassName}>
        {this.renderLabel()}

        <div className={classes.selectWrapper}>
          {this.renderSelect()}
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

export default injectSheet(style as any)(Select);
