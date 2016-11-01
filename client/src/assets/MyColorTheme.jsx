import {amber500, amber900, lightBlack, darkBlack, pinkA200, grey100, grey500, grey300, cyan500, white} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator'
import {Spacing} from 'material-ui/styles/spacing'
import {zIndex} from 'material-ui/styles/zIndex'

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: amber500,
    primary2Color: amber900,
    primary3Color: lightBlack,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500
  }
};
