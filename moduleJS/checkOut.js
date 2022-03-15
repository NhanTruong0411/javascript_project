import {validateContactForm_fullName,validateContactForm_email,validateContactForm_phoneNumber,validateContactForm_address,validateContactForm_cardName,validateContactForm_cardNumber,validateContactForm_cardExpireMonth,validateContactForm_cardExpireYear,cardName_flag,cardNumber_flag,cardExpireMonth_flag,cardExpireYear_flag,fullName_flag,email_flag,phoneNumber_flag,address_flag} from './validateForm.js'
import {saveUserInfo} from './saveUserInfo.js'

//======================================================== Send Email For Customer ========================================================

//In thông tin sản phẩm vào mail khách hàng.
var emailContent = function() {
  let productsInCart = localStorage.getItem('productsInCart');
  let row = '';

  productsInCart = JSON.parse(productsInCart);

  if(productsInCart) {
    Object.values(productsInCart).map(el => {
      row += ` <tr>
                  <td bgcolor="#ffffff" style="padding:10px; padding-bottom: 50px; padding-left: 50px; font-size: 21px;">${el.name}</td>
                  <td bgcolor="#ffffff" style="padding:10px; padding-bottom: 50px; padding-left: 50px; font-size: 21px; ">${el.index}</td>
                  <td bgcolor="#ffffff" style="padding:10px; padding-bottom: 50px; padding-left: 50px; font-size: 21px;">${Intl.NumberFormat().format(el.index * el.price)} vnđ</td>
              </tr>`
    });
    return row;
  }
}

export var onFormSubmit = function () {
  let fullName = document.getElementById('fullName')
  let email = document.getElementById('email')
  let phoneNumber = document.getElementById('phoneNumber')
  let address = document.getElementById('address')
  let formMessage = document.querySelector('#formMessage');
  let cardName = document.getElementById('cardName');
  let cardNumber = document.getElementById('cardNumber');
  let cardExpireMonth = document.getElementById('cardExpireMonth');
  let cardExpireYear = document.getElementById('cardExpireYear');

  fullName.addEventListener('keyup',validateContactForm_fullName);
  email.addEventListener('keyup',validateContactForm_email);
  phoneNumber.addEventListener('keyup',validateContactForm_phoneNumber);
  address.addEventListener('keyup',validateContactForm_address);
  cardName.addEventListener('keyup',validateContactForm_cardName);
  cardNumber.addEventListener('keyup',validateContactForm_cardNumber);
  cardExpireMonth.addEventListener('keyup',validateContactForm_cardExpireMonth);
  cardExpireYear.addEventListener('keyup',validateContactForm_cardExpireYear);
  

  //Kiểm tra thông tin nhập vào, nếu đúng thì send email còn sai thì xin nhập lại.
  let submitButton = document.querySelector('#submitButton');
  let productsInCart = localStorage.getItem('productsInCart');
  productsInCart = JSON.parse(productsInCart);
  let totalCartNumber = localStorage.getItem('totalCartNumber');
  totalCartNumber = JSON.parse(totalCartNumber);
  let totalCost = localStorage.getItem('totalCost');
  totalCost = JSON.parse(totalCost);

  submitButton.addEventListener('click', () => {
    if(!fullName_flag || !email_flag || !phoneNumber_flag || !address_flag || !cardName_flag || !cardNumber_flag || !cardExpireMonth_flag || !cardExpireYear_flag) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...You Need To Fill In The Information Correctly !',
      })
      let fullNameError = document.getElementById('fullName-error');
      let emailError = document.getElementById('email-error');
      let phoneNumberError = document.getElementById('phoneNumber-error');
      let addressError = document.getElementById('address-error');
      let cardNameError = document.getElementById('cardName-error');
      let cardNumberError = document.getElementById('cardNumber-error');
      let cardExpireMonthError = document.getElementById('cardExpireMonth-error');
      let cardExpireYearError =  document.getElementById('cardExpireYear-error');
      fullNameError.innerHTML = "* Vui lòng nhập vào họ tên !";
      emailError.innerHTML = "* Vui lòng nhập vào email !";
      phoneNumberError.innerHTML = "* Vui lòng nhập vào số điện thoại !";
      addressError.innerHTML = "* Vui lòng nhập vào địa chỉ !";
      cardNameError.innerHTML = "* Vui lòng nhập vào họ tên !";
      cardNumberError.innerHTML = "* Vui lòng nhập vào mã số thẻ !";
      cardExpireMonthError.innerHTML = "* Vui lòng nhập vào tháng hết hạn của thẻ !";
      cardExpireYearError.innerHTML = "* Vui lòng nhập vào năm hết hạn của thẻ !";

    //Tất cả điều kiện đã thỏa, thực hiện các bước bên dưới.
    } else {
      //Thông báo đặt hàng thành công;
      Swal.fire({
        icon: 'success',
        title: 'Thanks For Using Tasty Product, Check Your Email One More Step For More Information.',
      })
      
      //Gửi email đến khách hàng;
      Email.send({
        SecureToken : 'de03a227-8585-4e67-a331-d8c8a99e4f96',
        From: 'huunhan.hui@gmail.com',
        To: `${email.value}`,
        Subject: "Thank you for using Tasty's products",
        Body: `<section style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <!-- LOGO -->
                  <tr>
                      <td bgcolor="black" align="center">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                              <tr>
                                  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td bgcolor="black" align="center" style="padding: 0px 10px 0px 10px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                              <tr>
                                  <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                                      <h1 style="font-size: 48px; font-weight: 400; margin: 2; font-family: 'Satisfy';  line-height: 65px;">Thank For Your Order!</h1> 
                                      <h1 style="font-family: 'Satisfy';">Tasty<span style="color: crimson;">.</span><h1>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                    <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                          <tr>
                              <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" colspan="3">
                                  <p style="margin: 0;font-family: 'Satisfy'; font-size: 20px; ">Wish you have a beautiful meals with your partner, your family. And hope to see you again.</p>
                              </td>
                          </tr>
                          <tr>
                              <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 0px 10px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" colspan="3">
                                  <p style="margin-left: 20px; font-size: 30px;">Items Ordered</p>
                              </td>
                          </tr>
                          <tr bgcolor="#ffffff" style="width: 100px;">
                              <td style="border-top: 1px solid black; width: 100px; padding-bottom: 50px;" colspan="3"></td>
                          </tr>
                          <tr bgcolor="#ffffff" style="width: 100px;">
                              <td bgcolor="#ffffff" style="padding:10px; padding-bottom: 50px; padding-left: 50px; font-size: 23px;">Name</td>
                              <td bgcolor="#ffffff" style="padding:10px; padding-bottom: 50px; text-align: center; font-size: 23px;">Quantity</td>
                              <td bgcolor="#ffffff" style="padding:10px; padding-bottom: 50px; padding-right: 50px; text-align: center;  font-size: 23px;">Price</td>
                          </tr>
                          <div id="contentEmailRow">
                              ${emailContent()}
                          </div>
                          <tr bgcolor="#ffffff" style="width: 100px;">
                              <td style="border-bottom: 1px solid black; width: 100px; padding-bottom: 50px;" colspan="3"></td>
                          </tr>
                          <tr>
                              <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 0px 10px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" colspan="3">
                                  <p style="margin-left: 20px; font-size: 18px; float: right; font-size: 30px; padding-bottom: 100px">Total Amount: ${Intl.NumberFormat().format(totalCost)} vnđ</p>
                              </td>
                          </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </section>`
      })

      //Xóa tất cả bộ nhớ trong local Storage
      localStorage.removeItem('totalCartNumber');
      localStorage.removeItem('productsInCart');
      localStorage.removeItem('totalCost');

      //Lưu trữ thông tin khách hàng vào localStorage tên userInfoInCart
      saveUserInfo();

      //Chuyển hướng quay về trang chủ;
      setTimeout( function() {location.href = "../index.html"}, 3000);
    }
  });
}

