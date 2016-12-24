import Component from 'react-pure-render/component';
import Radium from 'radium';
import React from 'react';
import image from './logo.png';
@Radium
export default class Logo extends Component {

  render() {

    return (
      <img
        className="logo-img"
        src={image}
        style={styles}
      />
    )
  };

}

const styles = {
  maxWidth: '110px'
}
