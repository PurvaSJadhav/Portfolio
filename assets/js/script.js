'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);




// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// --- EmailJS Config ---
  const SERVICE_ID  = "service_xumdlke";
  const TEMPLATE_ID = "template_4akkrnl";
  const PUBLIC_KEY  = "FGIl__ocJf-FE1y16";

  // Initialize EmailJS
  emailjs.init(PUBLIC_KEY);

  // --- Form Handling ---
  const status     = document.createElement("p");                       // Status message
  status.className = "form-status";                                     // You can style this class
  form.appendChild(status);                                             // Add below form

  // --- Real-time Form Validation ---
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // --- EmailJS Submit Handler ---
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formBtn.setAttribute("disabled", "");
    status.textContent = "Sending…";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        status.textContent = "✅";
        form.reset();
        setTimeout(() => {
          status.textContent = "";
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        status.textContent = "❌";
      });
  });



  // to open certificate
  document.addEventListener("DOMContentLoaded", function () {
  const pdfLinks = [
    "https://drive.google.com/file/d/1DMZeFP95qDK9ZnHO0l6FQj50YgBI2bsM/view?usp=drive_link",
    "https://drive.google.com/file/d/1lPLhfVWEfqamhtv2WYOa5bwHfgMKRwa1/view?usp=drive_link",
    "https://drive.google.com/file/d/1YFsOZHpb_iquJpGZ9dbD9flQaub53M81/view?usp=drive_link",
    "https://drive.google.com/file/d/1RbBs0iecascD5tNdwjbO9AY5_IMeLsC4/view?usp=drive_link",
    "https://drive.google.com/file/d/1S30BtG2ZWAKlqHIW_XsFuLVat6yg0bYO/view?usp=drive_link",
    "https://drive.google.com/file/d/1RsbN5areHINu9Y5i8zmt479PErqSI5iO/view?usp=drive_link",
    "https://drive.google.com/file/d/1qq-ZQ0Z8c-DeglzxnFA-in19TmFKvqcY/view?usp=drive_link",
    "https://drive.google.com/file/d/1s4XO7Xgg2ZkifjJ8ClP-NSq0c9fnMwX3/view?usp=drive_link",
    "https://drive.google.com/file/d/1D0yGScO1l3KaNaDMgcRl2PNfHwK4wpGT/view?usp=drive_link",
    "https://drive.google.com/file/d/1Rsi227Pa2J2bznzEstIBiQLo4C-TgQUG/view?usp=drive_link",
    "https://drive.google.com/file/d/1DB3PAdG3KT0c0p0U58r8QwKmJXnPaQdp/view?usp=drive_link",
    "https://drive.google.com/file/d/1iW-gQk03dHaNJI2bq1g2sL0E_OGwLDDL/view?usp=drive_link"
  ];
  const items = document.querySelectorAll(".certificates-post-item");
  items.forEach((item, index) => {
    const image = item.querySelector("img");
    if (image && pdfLinks[index]) {
      image.style.cursor = "pointer";
      image.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.open(pdfLinks[index], "_blank");
      });
    }
  });
});


// to open project
document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = [
    "https://swaadconnect-frontend.onrender.com", 
    "https://feedinghands-7dt1.onrender.com",     
    "https://wanderlust-b93r.onrender.com",
    "https://weatherwizardapp.netlify.app/",
    "https://github.com/PurvaSJadhav/Library-Management-System",
    "https://github.com/PurvaSJadhav/ShivDurgYatra",
    "https://novapixels.netlify.app/"        
  ];
  const iconBoxes = document.querySelectorAll(".project-item-icon-box");
  iconBoxes.forEach((iconBox, index) => {
    iconBox.style.cursor = "pointer";
    iconBox.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (projectLinks[index]) {
        window.open(projectLinks[index], "_blank");
      }
    });
  });
});
