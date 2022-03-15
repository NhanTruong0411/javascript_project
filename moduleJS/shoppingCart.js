import{allProducts} from './allProducts.js';

//========================================================Shopping Cart========================================================

//Ham hien thi so san pham da them vao trong gio hang;
export var addToCartButton = (arr) => {
  //Vong lap qua cac button ben trong cac san pham cua trang menu;
  let addToCartButton = document.getElementsByClassName('addToCartButton');
  for(let i=0; i<addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
      console.log("Hello");
      //Ham tinh hien thi so san pham da them vao gio hang;
      countProductNumber(arr[i]);
      //Ham tinh tong gia tien cua cac san pham;
      totalCartCost(arr[i]);
      Swal.fire({
        icon: 'success',
        title: 'Added To Your Cart',
      })
    });
  }
}

export var countProductNumber = (product, action) => {
  let cartQuantity = document.querySelector('.badge.badge-danger');
  //LS chứa tổng số sản phẩm trong cart;
  let totalCartNumber = localStorage.getItem('totalCartNumber');
  totalCartNumber = JSON.parse(totalCartNumber);
  //LS chứa thông tin sản phẩm trong cart;
  // let productsInCart = localStorage.getItem(productsInCart);
  // productsInCart = JSON.parse(productsInCart);

  if(action == 'decrease') {
    localStorage.setItem('totalCartNumber', totalCartNumber - 1);
    cartQuantity.textContent = totalCartNumber - 1;
    cartQuantity.style.visibility = 'visible';
  } else if (totalCartNumber || action == 'increase') {
    localStorage.setItem('totalCartNumber', totalCartNumber + 1)
    cartQuantity.textContent = totalCartNumber + 1;
    cartQuantity.style.visibility = 'visible';
  } else {
    localStorage.setItem('totalCartNumber', 1)
    cartQuantity.textContent = 1;
    cartQuantity.style.visibility = 'visible';
  }

  //Sau khi dem cac san pham da them vao gio hang, goi ham them cac san pham vao trong localStorage
  addProductToCart(product);
  
}



//Ham hien thi so luong san pham them vao gio hang sau khi reload page;
export var onloadCartNumber = function() {
  let cartQuantity = document.querySelector('.badge.badge-danger');
  let productNumber = localStorage.getItem('totalCartNumber');
  productNumber = JSON.parse(productNumber);
  if(productNumber) {
    cartQuantity.textContent = productNumber;
    cartQuantity.style.visibility = 'visible';
  } else {
    cartQuantity.style.visibility = 'hidden';
  }
}



//Ham them cac san pham vao trong localStorage
export var addProductToCart = function (product) {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems);
  //Neu trong localStorage cartItems da co san pham thi them san pham tiep theo ben duoi;
  if(cartItems) {
    if(cartItems[product.name] == undefined) {
      cartItems = {
      ...cartItems,
      [product.name] : product,
      }
    }
    cartItems[product.name].index++;
  } else { //Neu chua co san pham thi tao 1 doi tuong roi them vao trong localStorage
    cartItems = {
      [product.name] : product,
    }
    cartItems[product.name].index = 1;
  }

  localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}


//Ham tinh tong tien 
export var totalCartCost = function(product, action) {
  let cartCost = localStorage.getItem('totalCost');
  cartCost = JSON.parse(cartCost);

  if(action == 'decrease') {
    cartCost = JSON.parse(cartCost);
    localStorage.setItem('totalCost', cartCost - product.price);
  } else if(cartCost) {
    cartCost = JSON.parse(cartCost || action == 'increase');
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }

  
}


//Ham hien thi san pham vao ben trong shopping cart
export var displayCart = function () {
  //localStorage chua tien cua cac san pham trong localStorage
  let cartCost = localStorage.getItem('totalCost');
  cartCost = JSON.parse(cartCost);
  //productsInCart: localStorage chinh, chua thong tin cac san pham
  let productsInCart = localStorage.getItem('productsInCart')
  productsInCart = JSON.parse(productsInCart);
  
  let cartProductsContainer = document.querySelector('#cartProductsContainer');
  let productsContainer_footer = document.querySelector('#productsContainer_footer')
  let cart_nothing = document.querySelector('#cart_nothing');
  let tableCart = document.querySelector('#tableCart');


  if(productsInCart && cartProductsContainer) {
    cartProductsContainer.innerHTML = '';
    Object.values(productsInCart).map(item => {
      
      cart_nothing.style.display = 'none';
      cartProductsContainer.innerHTML += `<tr class="">
                                              <td>${item.name}</td>
                                              <td style="width:300px; height: auto"><img src="images/${item.img}" class="w-100 img-fuild"></td>
                                              <td>
                                                <span class="decreaseButton"><i class="fas fa-arrow-circle-left"></i></span>&nbsp;
                                                <span>${item.index}&nbsp;</span>
                                                <span class="increaseButton" ><i class="fas fa-arrow-circle-right"></i></span></td>
                                              <td>${item.price} vnđ</td>
                                              <td>${(item.price * item.index)} vnđ</td>
                                              <td>
                                                <a type="button" class="btn btn-danger btn-remove">Delete</a>
                                              </td>
                                          </tr>`
    });
    productsContainer_footer.innerHTML = `<hr>
                                            <div class="totalContainer text-light">
                                              <div class = "row">
                                                <div class="col-6">
                                                  <a type="button" class="btn btn-lg btn-info m-4" id="btn-pay-bill">Pay The Bill</a>
                                                </div>
                                                <div class="col-6">
                                                  <h4 class="text-right display-4">Total Pay : ${cartCost} vnđ</h4>
                                                </div>
                                              </div>
                                            </div>`
  }
  //Goi ham xoa tung san pham trong cart moi khi co san pham trong cart
  deleteButton();
  //Goi ham thay doi so luong san pham trong cart
  changeProductsQuantity();
  
}



//Ham xoa tung san pham trong cart
export var deleteButton = function () {
  let deleteButton = document.querySelectorAll('.btn.btn-danger.btn-remove');
  let producstInfo, productsChild, productsName;
  //Lay LS totalCartNumber de cap nhap lai so luong san pham sau khi click delete button;
  let totalCartNumber = localStorage.getItem('totalCartNumber')
  //Lay LS totalCost de cap nhap lai tong gia tien san pham sau khi click delete button;
  let totalCost = localStorage.getItem('totalCost')
  //Lay LS productsInCart de xac dinh san pham can xoa cu the;
  let productsInCart = localStorage.getItem('productsInCart');
  productsInCart = JSON.parse(productsInCart);

  for (let i=0; i<deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', () => {
      //Lay ten san pham sau khi click
      producstInfo = deleteButton[i].parentElement.parentElement;
      productsChild = producstInfo.getElementsByTagName('td')[0];
      productsName = productsChild.innerHTML;
      //Sau khi da co ten san pham tuong ung voi key object;
      //Cap nhap lai so luong san pham ben trong cart qua LS totalCartNumber;
      localStorage.setItem('totalCartNumber', totalCartNumber - productsInCart[productsName].index);
      //Cap nhap lai tong gia tien ben trong cart qua LS totalCost;
      localStorage.setItem('totalCost', totalCost - (productsInCart[productsName].price * productsInCart[productsName].index));
      //Xoa san pham ra khoi LS productsInCart;
      delete productsInCart[productsName];
      //Cap nhap lai LS productsInCart
      localStorage.setItem('productsInCart',JSON.stringify(productsInCart));
      //Goi lai ham hien thi san pham va hien thi so luong san pham
      displayCart();
      onloadCartNumber();
      //Goi ham afterPayButton;
      if (window.location.pathname == "/cart.html") {
        afterPayButton();
      }
    });
  }
}



//Ham thay doi so luong san phan
export var changeProductsQuantity = function () {
  let productsInCart = localStorage.getItem('productsInCart')
  productsInCart = JSON.parse(productsInCart)
  let totalCartNumber = localStorage.getItem('totalCartNumber')
  totalCartNumber = JSON.parse(totalCartNumber);
  let totalCost = localStorage.getItem('totalCost');
  totalCost = JSON.parse(totalCost);
  
  let decreaseButton = document.querySelectorAll('.decreaseButton');
  let increaseButton = document.querySelectorAll('.increaseButton')
  let curQuantity = 0;
  let curProductName = '';

  //Xử lý giảm
  for(let i=0; i<decreaseButton.length; i++) {
    decreaseButton[i].addEventListener('click', () => {
      //Lay so luong cua san pham cu the ben trong cart;
      curQuantity = decreaseButton[i].parentElement.textContent.trim();
      //Lay ten cua san pham cu the ben trong cart;
      curProductName = decreaseButton[i].parentElement.previousElementSibling.previousElementSibling.textContent;
      if(productsInCart[curProductName].index > 1) {
        productsInCart[curProductName].index -= 1;
        countProductNumber(productsInCart[curProductName], 'decrease');
        totalCartCost(productsInCart[curProductName], 'decrease');
        localStorage.setItem('productsInCart',JSON.stringify(productsInCart));
        displayCart();
      }
    })
  }

  //Xử lý tăng
  for(let i=0; i<increaseButton.length; i++) {
    increaseButton[i].addEventListener('click', () => {
      curQuantity = increaseButton[i].parentElement.textContent.trim();
      curProductName = increaseButton[i].parentElement.previousElementSibling.previousElementSibling.textContent; 
      if(productsInCart[curProductName].index >= 1) {
        productsInCart[curProductName].index += 1;
        countProductNumber(productsInCart[curProductName], 'increase');
        totalCartCost(productsInCart[curProductName]);
        localStorage.setItem('productsInCart',JSON.stringify(productsInCart));
        displayCart();
      }
    })
  }
  //Goi ham afterPayButton;
  if (window.location.pathname == "/cart.html") {
    afterPayButton();
  }
}


//Chuyển hướng khi click vào nút thanh toán;
export var afterPayButton = function () {
  let productsInCart = localStorage.getItem('productsInCart');
  productsInCart = JSON.parse(productsInCart);
  let cartCost = localStorage.getItem('totalCost');
  cartCost = JSON.parse(cartCost);
  let payButton = document.querySelector('#btn-pay-bill');
  console.log(payButton);
  if(productsInCart) {
    payButton.addEventListener('click', () => {
      if(cartCost == 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...You Have Not Order Anything !',
        })
      } else {
        location.href = "http://127.0.0.1:5500/TruongHuuNhan_501200661_CD20CT13/Final_Project/contact.html";
      }
    });
  }

}