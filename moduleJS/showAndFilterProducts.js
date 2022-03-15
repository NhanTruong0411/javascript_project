import{allProducts} from './allProducts.js';
import{addToCartButton} from './shoppingCart.js'

//========================================================Show And Filter Products========================================================

//function Show product
export var showAllProducts = function (allProducts) {
  var filterProductContainer = document.querySelector('#showAllProducts');
  filterProductContainer.innerHTML = '';
  for(let i=0; i<allProducts.length; i++) {
    filterProductContainer.innerHTML += `<div class=" col-xl-3 col-lg-6 col-sm-6 padding-item my-5">
                                          <div class="overlay">
                                            <div class="item">
                                              <img src="images/${allProducts[i].img}" class="img-fluid">
                                              <h3>${allProducts[i].name}</h3>
                                              <span>${allProducts[i].price}<sup>vnđ</sup></span>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                                            </div>
                                            <div class="overlay-content">
                                              <div class="container">
                                                <div class="row">
                                                  <div class="col-4"><span href="#"><i class="fas fa-search"></i></span></div>
                                                  <div class="col-4"><span href="#"><i class="fas fa-heart"></i></span></div>
                                                  <div class="col-4"><span class="addToCartButton"><i class="fas fa-shopping-cart"></i></span></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>`
  }
}


//Sử dụng Jquery cho sự kiện on key up mỗi khi user nhập vào searchInput;
export var showFilterProducts = function() {
  $('#searchInput').on('keyup', function() {
    var userSearchValue = $(this).val();
    var allData = searchProduct(userSearchValue, allProducts);
    //Truyền dữ liệu mảng mới filterProducts vào hàm showAllProducts để in ra màn hình;
    showAllProducts(allData);
    addToCartButton(allData);
  });
}

//Hàm lọc giá trị user nhập vào và giá trị tương ứng bên trong mảng allProducts (nhập tên trong trường hợp này);
export var searchProduct = function (userSearchValue, allData) {
  var filterProducts = [];
  for(let i=0; i<allData.length; i++) {
    userSearchValue = userSearchValue.toLowerCase();
    var productName = allData[i].name.toLowerCase();
    //So sánh giá trị nhập vào của user và giá trị name trong allProducts, nếu hợp lệ, add vào mảng filterProducts;
    if(productName.includes(userSearchValue)) {
      filterProducts.push(allData[i]);
    }
  }
  return filterProducts;
}
