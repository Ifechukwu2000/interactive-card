

function validateForm() {
    var cardHolderName = document.getElementById("card-holder-name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expDate = document.getElementById("exp-date").value;
    var expDate1 = document.getElementById("exp-date1").value;
    var cvc1 = document.getElementById("cvc1").value;

    var isValid = true;
    if (!cardHolderName) {
      document.getElementById("card-holder-name-error").innerHTML = "This field is required.";
      document.getElementById("card-holder-name").style.border = "1px solid red";
      document.getElementById("card-holder-name-error").style.display = "block";

      isValid = false;
    } else {
      document.getElementById("card-holder-name-error").innerHTML = "";
      document.getElementById("card-holder-name").style.border = "1px solid #ccc";
    }
    if (!cardNumber || isNaN(cardNumber.value)) {
      document.getElementById("card-number-error").innerHTML = "Please enter a valid card number";
      document.getElementById("card-number").style.border = "1px solid red";
      isValid = false;
    } else {
      document.getElementById("card-number-error").innerHTML = "";
      document.getElementById("card-number").style.border = "1px solid #ccc";
    }
    if (!expDate) {
      document.getElementById("exp-date-error").innerHTML = "Can't be blank";
      document.getElementById("exp-date").style.border = "1px solid red";
      isValid = false;
    } else {
      document.getElementById("exp-date-error").innerHTML = "";
      document.getElementById("exp-date").style.border = "1px solid #ccc";
    }
    if (!expDate1) {
      document.getElementById("exp-date-error1").innerHTML = "Can't be blank.";
      document.getElementById("exp-date1").style.border = "1px solid red";
      isValid = false;
    } else {
      document.getElementById("exp-date-error1").innerHTML = "";
      document.getElementById("exp-date1").style.border = "1px solid #ccc";
      
    }
    if (!cvc1) {
      document.getElementById("cvc-error").innerHTML = "Can't be blank";
      document.getElementById("cvc1").style.border = "1px solid red";
     
      isValid = false;
    } else {
      document.getElementById("cvc-error").innerHTML = "";
      document.getElementById("cvc1").style.border = "1px solid #ccc";
      
    }

    return isValid;
}