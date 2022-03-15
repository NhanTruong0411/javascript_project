//======================================================== Save User Information ========================================================
export var saveUserInfo = () => {
  let fullName = document.getElementById('fullName').value;
  let email = document.getElementById('email').value;
  let phoneNumber = document.getElementById('phoneNumber').value;
  let address = document.getElementById('address').value;
  let formMessage = document.querySelector('#formMessage').value;
  let cardName = document.getElementById('cardName').value;
  let cardNumber = document.getElementById('cardNumber').value;
  let cardExpireMonth = document.getElementById('cardExpireMonth').value;
  let cardExpireYear = document.getElementById('cardExpireYear').value;
  let cvv = document.getElementById('CVV').value;
  let userIndex = 0;

  let userInfo = {
    fullName,
    email,
    phoneNumber,
    address,
    formMessage,
    cardName,
    cardNumber,
    cardExpireMonth,
    cardExpireYear,
    cvv,
    userIndex,
  }

  let userInfoInCart = localStorage.getItem('userInfoInCart');
  userInfoInCart = JSON.parse(userInfoInCart);

  if(userInfoInCart) {
    if(userInfoInCart[userInfo.fullName] == undefined) {
      userInfoInCart = {
        ...userInfoInCart,
        [userInfo.fullName] : userInfo,
      }
    }
    userInfoInCart[userInfo.fullName].userIndex++;
  } else {
    userInfoInCart = {
      [userInfo.fullName] : userInfo
    }
    userInfoInCart[userInfo.fullName].userIndex = 1;
  }

  localStorage.setItem('userInfoInCart', JSON.stringify(userInfoInCart));

  userInfoInCart = localStorage.getItem('userInfoInCart');
  userInfoInCart = JSON.parse(userInfoInCart);
}