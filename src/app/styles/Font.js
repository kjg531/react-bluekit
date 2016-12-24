import Radium, {Style} from 'radium';
import React, {Component} from 'react';

@Radium
export class FontStyle extends Component {
  render() {
    return (
      <Style rules={{
        '@font-face': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 300,
          src: "local('Roboto Light'), local('Roboto-Light'), url(http://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans920.woff2) format('woff2')",
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
        }
      }}/>
    )
  }
}

export default {
  fontFamily: 'Roboto',
  fontWeight: 300,
  fontSize: '14px',
  textAlign: 'left',
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  size: {
    medium: {
      fontSize: '18px'
    },
    normal: {
      fontSize: '14px'
    },
    small: {
      fontSize: '12px'
    }
  }

}
