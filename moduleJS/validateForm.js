

//========================================================Validate Form========================================================
//ràng buộc Email
var validateEmail = function(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
//ràng buộc phoneNumber 
var validatePhone = function(phone) {
  const regexPhone = /(01|09|07)+([0-9]{8}|[0-9]{9})\b/ig;
  return regexPhone.test(phone);
}

export var fullName_flag = false, email_flag = false, phoneNumber_flag = false, address_flag = false;
export var cardName_flag = false, cardNumber_flag = false, cardExpireMonth_flag = false, cardExpireYear_flag = false;
//ràng buộc cho fullName
export var validateContactForm_fullName = function()  {
  let fullName = document.getElementById('fullName').value;
  let fullNameError = document.getElementById('fullName-error');
  if(fullName == '') {
    fullName = '';
    fullNameError.innerHTML = "* Vui lòng nhập vào họ tên !";
  } else if (fullName.trim().length < 4) {
    fullName = '';
    fullNameError.innerHTML = "* Họ tên không được nhỏ hơn 4 ký tự !";
  } else if (fullName.trim().length > 40) {
    fullName = '';
    fullNameError.innerHTML = "* Họ tên không được lớn hơn 40 ký tự !";
  } else {
    fullNameError.innerHTML = "";
    fullName_flag = true;
    fullName == ''
  }
}

//ràng buộc cho Email
export var validateContactForm_email = function()  {
  let email = document.getElementById('email').value;
  let emailError = document.getElementById('email-error');
  if (email == '') {
    email = '';
    emailError.innerHTML = "* Vui lòng nhập vào email !";
  } else if (!validateEmail(email)) {
    email = '';
    emailError.innerHTML = "* Email không hợp lệ, vui lòng nhập lại !";
  } else {
    emailError.innerHTML = "";
    email_flag = true;
    email == ''
  }
}


//ràng buộc cho phoneNumber
export var validateContactForm_phoneNumber = function()  {
  let phoneNumber = document.getElementById('phoneNumber').value;
  let phoneNumberError = document.getElementById('phoneNumber-error');
  if (phoneNumber == '') {
    phoneNumber = '';
    phoneNumberError.innerHTML = "* Vui lòng nhập vào số điện thoại !";
  } else if (phoneNumber.trim().length < 10 && phoneNumber.trim().length > 11) {
    phoneNumber = '';
    phoneNumberError.innerHTML = "* Số điện thoại gồm 10 hoặc 11 chữ số";
  } else if (!validatePhone(phoneNumber)) {
    phoneNumber = '';
    phoneNumberError.innerHTML = "* Số điện thoại không hợp lệ, vui lòng nhập lại !";
  } else {
    phoneNumberError.innerHTML = ""; 
    phoneNumber_flag = true;
    phoneNumber == ''
  }
}

  //ràng buộc cho address
export var validateContactForm_address = function()  {
  let address = document.getElementById('address').value;
  let addressError = document.getElementById('address-error');
  if (address == '') {
    address = '';
    addressError.innerHTML = "* Vui lòng nhập vào địa chỉ !";
  } else if (address.trim().length < 15) {
    address = '';
    addressError.innerHTML = "* Vui lòng nhập địa chỉ đầy đủ !";
  } else {
    addressError.innerHTML = "";
    address_flag = true;
    address == '';
  }
}

//ràng buộc cho cardName
export var validateContactForm_cardName = function()  {
  let cardName = document.getElementById('cardName').value;
  let cardNameError = document.getElementById('cardName-error');
  if(cardName == '') {
    cardName = '';
    cardNameError.innerHTML = "* Vui lòng nhập vào họ tên !";
  } else if (cardName.trim().length < 4) {
    cardName = '';
    cardNameError.innerHTML = "* Họ tên không được nhỏ hơn 4 ký tự !";
  } else if (cardName.trim().length > 40) {
    cardName = '';
    cardNameError.innerHTML = "* Họ tên không được lớn hơn 40 ký tự !";
  } else {
    cardNameError.innerHTML = "";
    cardName_flag = true;
    cardName == ''
  }
}

//ràng buộc cho cardNumber
export var validateContactForm_cardNumber = function()  {
  let cardNumber = document.getElementById('cardNumber').value;
  let cardNumberError = document.getElementById('cardNumber-error');
  if (cardNumber == '') {
    cardNumber = '';
    cardNumberError.innerHTML = "* Vui lòng nhập vào mã số thẻ !";
  } else if (cardNumber.trim().length !=19) {
    cardNumber = '';
    cardNumberError.innerHTML = "* Mã số thẻ không hợp lệ, vui lòng nhập lại !";
  } else {
    cardNumberError.innerHTML = ""; 
    cardNumber_flag = true;
    cardNumber == ''
  }
}

//ràng buộc cho cardExpireMonth
export var validateContactForm_cardExpireMonth = function()  {
  let cardExpireMonth = document.getElementById('cardExpireMonth').value;
  let cardExpireMonthError = document.getElementById('cardExpireMonth-error');
  if (cardExpireMonth == '') {
    cardExpireMonth = '';
    cardExpireMonthError.innerHTML = "* Vui lòng nhập vào tháng hết hạn của thẻ !";
  } else if (cardExpireMonth.toLowerCase() != 'january' && cardExpireMonth.toLowerCase() != 'february' && cardExpireMonth.toLowerCase() != 'march' && cardExpireMonth.toLowerCase() != 'April' && cardExpireMonth.toLowerCase() != 'may' && cardExpireMonth.toLowerCase() != 'june' && cardExpireMonth.toLowerCase() != 'july' && cardExpireMonth.toLowerCase() != 'august' && cardExpireMonth.toLowerCase() != 'september' && cardExpireMonth.toLowerCase() != 'october' && cardExpireMonth.toLowerCase() != 'november' && cardExpireMonth.toLowerCase() != 'december') {
    cardExpireMonth = '';
    cardExpireMonthError.innerHTML = "* Tháng hết hạn của thẻ không hợp lệ, vui lòng nhập lại !";
  } else {
    cardExpireMonthError.innerHTML = ""; 
    cardExpireMonth_flag = true;
    cardExpireMonth == ''
  }
}

//ràng buộc cho cardExpireYear
export var validateContactForm_cardExpireYear = function()  {
  let cardExpireYear = document.getElementById('cardExpireYear').value;
  let cardExpireYearError =  document.getElementById('cardExpireYear-error');
  if (cardExpireYear == '') {
    cardExpireYear = '';
    cardExpireYearError.innerHTML = "* Vui lòng nhập vào năm hết hạn của thẻ !";
  } else if (cardExpireYear.trim().length != 4) {
    cardExpireYear = '';
    cardExpireYearError.innerHTML = "* Vui lòng nhập vào năm hết hạn của thẻ !";
  } else {
    cardExpireYearError.innerHTML = ""; 
    cardExpireYear_flag = true;
    cardExpireYear == ''
  }
}



