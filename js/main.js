// function toggleNav() {
//     const topNav = document.getElementById("top-nav");
//     if (topNav.className === "menu") {
//         topNav.className += " responsive";
//         topNav.style.width = "100%";
//     } else {
//         topNav.className = "menu";
//         topNav.style.width = "0%";
//     }

//   }

// const topNav = document.getElementById("top-nav");
//   let toggleNav = function () {

//   };

//   $('#click_advance').click(function(){
//     $('#display_advance').toggle('1000');
//     icon = $(this).find("i");
//     icon.toggleClass("icon-circle-arrow-up icon-circle-arrow-down")
//   })

function toggleNav () {
    const icon = document.getElementById("menu-icon");
      if (icon.classList.contains("fa fa-bars")) {
        icon.classList.remove("fa fa-bars");
        icon.classList.add("fas fa-times");
    } else {
       icon.classList.remove("fas fa-times");
       icon.classList.add("fas fa-times");
    }
 }
 icon.onclick = toggleNav;