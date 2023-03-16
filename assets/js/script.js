// Javascript for Copy Button Modal 1
let text = document.getElementById("copiedText").innerHTML;
const copyText = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Javascript for Copy Button Modal 1
let text2 = document.getElementById("copiedText2").innerHTML;
const copyText2 = async () => {
  try {
    await navigator.clipboard.writeText(text2);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Example onClick to run animation
// function animation() {
//   const variableName = document.querySelector("#elementID");
//   variableName.addEventListener("click", (e) => {
//     e.preventDefault;
//     variableName.classList.add("animation");
//     setTimeout(() => {
//       variableName.classList.remove("animation");
//     }, 600);
//   });
// }

// Javascript for modals
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

// Javascript for Animation
document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".sidenav");
  this.elems = elems;
  var options = {
    closeOnClick: true,
    alignment: "right",
  };
  var instances = M.Dropdown.init(elems, options);
});
