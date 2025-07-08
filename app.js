const menuBtn =document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    
    const isOpen =navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});



const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin:"right",
});

// ScrollReveal().reveal(".header__content h2", {
//     ...scrollRevealOption,
//     delay:500,
// });

// ScrollReveal().reveal(".header__content h1", {
//     ...scrollRevealOption,
//     delay:1000,
// });


// ScrollReveal().reveal(".header__content h3", {
//     ...scrollRevealOption,
//     delay:1500,
// });

// ScrollReveal().reveal(".header__content p", {
//     ...scrollRevealOption,
    
//     // interval:500,
//     delay:2000,
// });

// ScrollReveal().reveal(".header__btns", {
//     ...scrollRevealOption,
//     delay:3000,
// });

ScrollReveal().reveal(".about__image", {
    ...scrollRevealOption,
    origin:"left",
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".about__description", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".about__grid", {
    ...scrollRevealOption,
    delay:2000,
});

ScrollReveal().reveal(".about__content h4", {
    ...scrollRevealOption,
    delay:2500,
});

ScrollReveal().reveal(".about__flex div", {
    ...scrollRevealOption,
    delay:3000,
    interval: 500,
});

ScrollReveal().reveal(".project__card", {
    ...scrollRevealOption,
    interval: 500,
});


var form = document.getElementById("contact-data");

form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form), 
    })
    .then(response => response.json())
    .then(result => {
        if (result.created === 1) {
            alert('Submitted! 😊 Thank you ' + document.getElementById('uname').value);
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting form.");
    });
});






