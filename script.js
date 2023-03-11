

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

const cardHolderName = document.getElementById("card-holder-name");
const cardHolderName1 = document.getElementById("cardname3");

cardHolderName.addEventListener("input", (event) => {
  const cardHolderValue = event.target.value;

  cardHolderName1.innerHTML =  cardHolderValue;
});

const cardNumber = document.getElementById("card-number");
const cardNumber1 = document.getElementById("num1");

cardNumber.addEventListener("input", (event) => {
  const cardHolderValue1 = event.target.value;

  cardNumber1.innerHTML =  cardHolderValue1;
});


const CVV1 = document.getElementById("cvc1");
const CVV2= document.getElementById("cvv3");

CVV1.addEventListener("input", (event) => {
  const cardHolderValue2 = event.target.value;

  CVV2.innerHTML =  cardHolderValue2;
});

const MM1 = document.getElementById("exp-date");
const MM2= document.getElementById("mm1");


MM1.addEventListener("input", (event) => {
  const cardHolderValue3 = event.target.value;

  MM2.innerHTML =  cardHolderValue3;
});

const YY1 = document.getElementById("exp-date1");
const YY2= document.getElementById("yy1");


YY1.addEventListener("input", (event) => {
  const cardHolderValue4 = event.target.value;

  YY2.innerHTML =  cardHolderValue4;
});