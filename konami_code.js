const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.key || e.detail); //key superceds which in current documentation
    //does keydown press equal current indexed value of code?
    if (key === code[index]) {
      index++;
      //after progressing the current index value (due to match), check if all code values have been used
      if (index === code.length) {
        alert('Hurray!');
        //then reset the code's index
        index = 0;
      }
    } else {
      index = 0;
    }

  });
}
