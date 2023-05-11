function thumbs() {
    const buttonElement = document.querySelector('.fa');
 
    if (buttonElement.style.color === 'grey') {
      buttonElement.style.background = 'none';
      buttonElement.style.color = 'rgb(207, 64, 64)';
    } else {
      buttonElement.style.background = 'none';
      buttonElement.style.color = 'grey';
    }
  }
