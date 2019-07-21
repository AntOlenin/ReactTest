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
  emptyOptionText: string;
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

  render() {
    const { classes, testId, className, options, name, label, value: selectValue, emptyOptionText } = this.props;

    if (!options.length) {
      return null;
    }

    const optionsWithEmpty = [
      { text: emptyOptionText, value: '' },
      ...options,
    ];

    const rootClassName = classnames(classes.root, className && className);
    const currentOption = optionsWithEmpty.find(option => option.value === selectValue);

    return (
      <div className={rootClassName} data-testid={testId}>
        <label data-testid={testId ? `${testId}Label` : ''}>
          <Text size="s">{label}</Text>
        </label>

        <div className={classes.select}>
          {currentOption.text}

          <select
            name={name}
            value={selectValue}
            className={classes.nativeSelect}
            onChange={this.handleChange}
          >
            {optionsWithEmpty.map(({ value, text }) => {
              return <option key={value} value={value}>{text}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(Select);
