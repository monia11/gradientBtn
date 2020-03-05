

function gradientBtn(options){
  let buttons = document.querySelectorAll('.gradient-btn');

  switch(options.color){
    case 'red':
      options.gradient = ' #EF3B36 0%, #FFFFFF 51%, #EF3B36 100%';
      break;
    case 'pink':
      options.gradient = ' #ff0084 0%, #33001b 51%, #ff0084 100%';
      break;
    case 'green':
      options.gradient = '#1D976C 0%, #93F9B9 51%, #1D976C 100%';
      break;
    case 'blue':
      options.gradient = '#1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%';
      break;
    case 'darkBlue':
      options.gradient = '#000428 0%, #004e92 51%, #000428 100%';
      break;
    case 'yellow':
      options.gradient = '#FF8008 0%, #FFC837 51%, #FF8008 100%';
      break;
    case 'grey':
      options.gradient = '#757F9A 0%, #D7DDE8 51%, #757F9A 100%';
      break;
    default:
      options.gradient = '#757F9A 0%, #D7DDE8 51%, #757F9A 100%';
      break;
  }

    
   

  buttons.forEach(btn => {

    btn.style.backgroundImage = `linear-gradient(to right, ${options.gradient} )`;
    btn.style.backgroundSize = '200%';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.transitionDuration = '0.5s'

    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundPosition = 'right center';
    })
    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundPosition = 'left center';
    })
  })
}



module.exports.gradientBtn = gradientBtn;











