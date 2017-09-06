import { green700, green500, green100, lightGreen500, grey600, white, black, darkBlack, fullBlack } from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: green700, //Cor do AppBar, do TextField selecionado, texto do FlatButton Secondary e preenchimento do RaisedButton Secondary
    primary2Color: green500, //AINDA NAO SEI
    primary3Color: green100, //AINDA NAO SEI
    accent1Color: lightGreen500, //texto do FlatButton Primary e preenchimento do RaisedButton Primary
    accent2Color: lightGreen500, //AINDA NAO SEI
    accent3Color: lightGreen500, //AINDA NAO SEI
    textColor: white, //texto do FlatButton Default e texto do RaisedButton Default e texto dos campos
    alternateTextColor: grey600, //texto do RaisedButton Primary, texto do RaisedButton Secondary e preenchimento do RaisedButton Default e do burguer icon 
    canvasColor: white, //Cor do background do Paper
    borderColor: green700, //Cor do TextField não selecionado
    disabledColor: fade(green700, 0.3), //Cores atenuadas (Disabled)
    pickerHeaderColor: black, //AINDA NAO SEI
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
};
