import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import * as colors from '../styles/Colors';
import style from './checkbox.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


@Radium
export default class Checkbox extends Component {

  static propTypes = {
    label:    RPT.string,
    name:     RPT.string.isRequired,
    onChange: RPT.func,
    value:    RPT.bool.isRequired
  }

  static defaultProps = {
    value: false
  }

  render() {
    const {name, onChange, value} = this.props;
    let inputContainerClasses = cx("press");
    let inputClasses = cx("cbx", "hidden");

    return (
      <span></span>
    );
  }

};

const styles = {
  label: {
    position: 'relative',
    userSelect: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    width: 'auto',
    paddingLeft: '60px',
    empty: {
      paddingLeft: 0
    }
  },

  checkboxLabel: {
    fontWeight: 'normal',
    padding: '0 5px',
    display: 'inline-block'
  },

  input: {
    position: 'absolute',
    left: '-9999px',
    ':focus': {}
  },

  base: {
    width: '52px',
    height: '12px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.GRAY_DARKER,
    backgroundColor: colors.GRAY_DARKER,
    position: 'absolute',
    left: 0,
    top: '4px',
    transition: 'all .2s linear',
    checked: {
      backgroundColor: colors.BLUE,
    }
  },

  unchecked: {
    width: '30px',
    height: '18px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.GRAY_BRIGHT,
    backgroundColor: 'white',
    position: 'absolute',
    top: '-4px',
    left: '-1px',
    zIndex: 1,
    transition: 'all .2s linear'
  },

  checked: {
    left: '23px'
  }
};
