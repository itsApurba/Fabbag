//

const cartData = [];

const tabs = document.querySelectorAll("#tabs>li>button");
// tabs.forEach((el) => {
//   el.addEventListener(
//     "click",
//     () => {
//       //
//       // if(el.innerText == ){
//     }
//     // el.toggleAttribute("active");
//   );
// });

// create a click to open tab layout javascript

window.addEventListener("load", function () {
  document.body.removeAttribute("hidden");
  // store tabs variable
  var myTabs = document.querySelectorAll("#tabs li button");

  tabs.forEach((el) => {
    el.addEventListener("click", myTabClicks);
  });

  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }
    var clickedTab = tabClickEvent.currentTarget;

    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();

    var myContentPanes = document.querySelectorAll("#tabContents>div");
    console.log("myContentPanes: ", myContentPanes);

    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }

    var anchorReference = tabClickEvent.target;
    console.log("anchorReference: ", anchorReference);
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks);
  }
});

let price = Number(
  document
    .querySelector("#hero1 > div.right > h1.price")
    .innerText.split(" ")[1]
    .split(".")[0]
);

// const radio = document.querySelector("#plans > div");
// console.log(radio);
let plans = 1;
function radioPrice() {
  console.log(event.target.value);
  let value = event.target.value;
  if (value == "3") {
    let updatedPrice = price * 3;
    console.log("updatedPrice: ", updatedPrice);
    plans = 3;
    document.querySelector(
      "#hero1 > div.right > h1.price"
    ).innerText = `Rs. ${updatedPrice}.00`;
  } else {
    let updatedPrice = price * 1;
    plans = 1;
    document.querySelector(
      "#hero1 > div.right > h1.price"
    ).innerText = `Rs. ${updatedPrice}.00`;
  }
}

function qtyprice() {
  // console.log(event.target.value);
  // let value = event.target.value;
  // if (plans == 3) {
  //   let updatedPrice = price * value * 3;
  //   document.querySelector(
  //     "#hero1 > div.right > h1.price"
  //   ).innerText = `Rs. ${updatedPrice}.00`;
  //   console.log(updatedPrice);
  // } else {
  //   let updatedPrice = price * value;
  //   document.querySelector(
  //     "#hero1 > div.right > h1.price"
  //   ).innerText = `Rs. ${updatedPrice}.00`;
  //   console.log(updatedPrice);
  // }
}
cart.addEventListener("click", function () {
  // console.log("cart clicked");
  let img = document.querySelector("#hero1 > div.left > img").src;
  console.log("img: ", img);
  let name = document.querySelector("#hero1 > div.right > h1.title").innerText;
  let qty = document.querySelector("#qty").value;
  let plan = plans;
  let price = document.querySelector("#hero1 > div.right > h1.price").innerText;
  let price1 = price.split(" ")[1].split(".")[0];
  console.log(price1);

  cartObj = {
    img: img,
    name: name,
    qty: +qty,
    plan: +plan,
    price: +price1,
    totalPrice: +price1 * qty,
  };
  cartData.push(cartObj);
  console.log(cartData);
  localStorage.setItem("cartData", JSON.stringify(cartData));
  proccedToCheckout();
  alert("Added to cart");
});

function proccedToCheckout() {
  let cart = document.querySelector("#cart");
  cart.innerText = "Cart Page...";
  setTimeout(() => {
    window.location.href = "cart.html";
  }, 3000);
}
