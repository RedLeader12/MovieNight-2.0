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
  navigate: {
    marginLeft: 20,
    padding: 10, 
    background: 'none',
    outline: 'none',
    borderTop: '2px solid #1E2634',
    borderLeft:'2px solid #1E2634',
    borderRight:'2px solid #1E2634',
    borderBottom: '2px solid #1E2634',
    fontSize: 15,
    fontFamily: 'QuickSand',
    color: '#434954',
    fontWeight: 700,
    ':hover':{
      borderBottom:'5px solid #f8CA0C',
      color: '#eeeeef'
    }
  }
};
