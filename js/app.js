$(document).ready(function () {
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });

    return false;
  });

  window.addEventListener("scroll", function () { 
    let header = document.querySelector(".header")
    
    if (window.scrollY > 155) {
      if (!header.classList.contains("sticky-top")) {
        header.classList.add("sticky-top")
      }
    } else { 
      if (header.classList.contains("sticky-top")) {
        header.classList.add("move-up")
        header.addEventListener("transitionend", function () {
          header.classList.remove("sticky-top")
          header.classList.remove("move-up")
        }, { once: true })
      }
    }
  })

  document.querySelectorAll(".box").forEach(function (box) {
    if (box.offsetTop > window.innerHeight) {
      box.classList.add("not-visible")
    }
  })

  window.addEventListener("scroll", function () {
    document.querySelectorAll(".box.not-visible").forEach(function (box) {
      if (box.offsetTop < window.scrollY + window.innerHeight - 100) {
        setTimeout(function () {
          box.classList.remove("not-visible")
        }, 50)
      }
    })
  })

  const searchForm = document.querySelector("form.form-search")
  searchForm.addEventListener("submit", function (event) {
    let search = searchForm.querySelector("input").value
    if (search.length <= 0) {
      event.preventDefault()
    }
  })
});
