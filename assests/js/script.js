const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const navToggler = document.querySelector("#navToggler");
const navMenu = document.querySelector("#navMenu");
const body = document.querySelector("body");

const elements = document.querySelectorAll(".hidden");
elements.forEach((el) => observer.observe(el));

navToggler.addEventListener("click", () => {
    navMenu.classList.add("active");
    console.log(navMenu, navToggler);
});

let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
})



body.addEventListener("click", (e) => {
    if (e.target.id !== "navToggler") navMenu.classList.remove("active");
});
function sendEmail() {

    const serviceId = "service_9sfsceq";
    const templateId = "template_qbacxrl";

    emailjs
        .send("service_9sfsceq", "template_qbacxrl", {
            from_name: document.querySelector("#name").value + "," + document.querySelector("#email").value,
            to_name: "Jean",
            message: document.querySelector("#message").value,

        })
        .then((res) => {
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#message").value = "";
            alert("Message Sent Successfully");
        })
        .catch((err) => {
            console.error(err);
        });
}
