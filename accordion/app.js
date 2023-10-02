document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".accordion-btn");
  const accordionItem = document.querySelectorAll(".accordion-item");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector("i");

      if (!this.parentElement.classList.contains("open")) {
        // close all other accordion items
        accordionItem.forEach((item) => {
          item.classList.remove("open");
          item.querySelector(".accordion-content").style.maxHeight = "0";
          item.querySelector("i").classList.remove("fa-chevron-up");
          item.querySelector("i").classList.add("fa-chevron-down");
        });

        //   Open the clicked accordion item
        this.parentElement.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      } else {
        // Close the clicked accordion item
        this.parentElement.classList.remove("open");
        content.style.maxHeight = "0";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    });
  });

  //Open the first accordion item initially
  btns[0].click();
});
