


//========================================================Shopping Cart Products========================================================
//Hàm tạo đối tượng.
function createProduct(name, img, price, index) {
  return {
    name,
    img,
    price,
    index
  }
}
let beef1 = createProduct('Beef 1', 'gallery_1.jpg', 120000, 0 );
let beef2 = createProduct('Beef 2', 'gallery_2.jpg', 100000, 0 );
let beef3 = createProduct('Beef 3', 'gallery_3.jpg', 90000, 0 );
let beef4 = createProduct('Beef 4', 'gallery_4.jpg', 220000, 0 );

let chicken1 = createProduct('Chicken 1', 'gallery_5.jpg', 120000, 0 );
let chicken2 = createProduct('Chicken 2', 'gallery_6.jpg', 100000, 0 );
let chicken3 = createProduct('Chicken 3', 'gallery_7.jpg', 90000, 0);
let chicken4 = createProduct('Chicken 4', 'gallery_8.jpg', 220000, 0 );

let pork1 = createProduct('Pork 1', 'gallery_9.jpg', 120000, 0 );
let pork2 = createProduct('Pork 2', 'gallery_10.jpg', 100000, 0 );
let pork3 = createProduct('Pork 3', 'gallery_11.jpg', 90000, 0 );
let pork4 = createProduct('Pork 4', 'gallery_12.jpg', 220000, 0 );

let fish1 = createProduct('Fish 1', 'gallery_13.jpg', 120000, 0 );
let fish2 = createProduct('Fish 2', 'gallery_14.jpg', 100000, 0 );
let fish3 = createProduct('Fish 3', 'gallery_15.jpg', 90000, 0 );
let fish4 = createProduct('Fish 4', 'gallery_16.jpg', 220000, 0 );

export var allProducts = [beef1, beef2, beef3, beef4, chicken1, chicken2 ,chicken3 ,chicken4, pork1, pork2, pork3, pork4, fish1, fish2, fish3, fish4];
