const COLOURS = {
  primary: '#1E2634',
  primaryContrast: '#434954',
  secondary: '#1e2634',
  third: '#151c25',
  dark: '#020203',
  light: '#586071',
  backUpGrey: '#242E40',
  white: '#eeeeef',
  yellow: '#f8CA0C',
  secondaryyellow: '#EFB319',
  darkyellow: '#96751D'
};


module.exports = {
  colours: COLOURS,
    buttonNavigate: {
      fontSize: 15,
      fontFamily: 'QuickSand',
      color: '#434954',
      fontWeight: 700,
      margin: 0,
      outline: 'none',
      backgroundColor: '#1E2634',
      borderTop: '5px solid #1E2634',
      borderLeft: '5px solid #1E2634',
      borderRight: '5px solid #1E2634',
      borderBottom: '5px solid #1E2634',

      ':hover':{
        padding: 7, 
        color: '#eeeeef',
        borderBottom: '3px solid #f8CA0C'
      }
      
    }
   
  }
