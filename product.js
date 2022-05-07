//

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
