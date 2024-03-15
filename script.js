// script.js
function checkEligibility() {
    const ageInput = document.getElementById('ageInput');
    const resultMessage = document.getElementById('resultMessage');
    const age = parseInt(ageInput.value);

    if (isNaN(age) || age < 0) {
        resultMessage.textContent =alert ('Please enter a valid age.');
    } else if (age >= 18) {
        resultMessage.textContent =  Swal.fire({
            title: 'You are eligible to vote!',
            text: 'Clicked the button!',
            icon: 'success'
  });
    } else {
        resultMessage.textContent = 
        Swal.fire({
          title: 'Youre not Eligible!',
          text: 'Clicked the button!',
          icon: 'cross'
});
        ;
    }
}
