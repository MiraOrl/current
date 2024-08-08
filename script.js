const bodyElem = document.querySelector("body");
bodyElem.style.margin = "0px";
bodyElem.style.fontFamily = "Inter";
bodyElem.style.fontWeight = "400";
bodyElem.style.lineHeight = "23px";

function createElement(selector, styles = {}) {
  const element = document.createElement(selector);

  Object.assign(element.style, styles);

  return element;
}

const headerElem = createElement("header", { backgroundColor: "#E5FF76" });
bodyElem.append(headerElem);

const navElem = createElement("nav", {
  padding: "26px 48px",
  display: "flex",
  justifyContent: "flex-end",
});
headerElem.append(navElem);

const logoElem = createElement("div", { paddingRight: "50%" });
logoElem.classList.add("logo");

const logoImg = createElement("img");
logoImg.src = "./img/logo.png";
logoImg.alt = "logo";
logoElem.append(logoImg);
document.querySelector("nav").append(logoElem);

let array = [
  "Guides",
  "Feautures",
  "Pricing",
  "Support",
  "Changelog",
  "Sign in",
];

const ulElem = createElement("ul", { display: "flex" });
navElem.append(ulElem);

for (let i = 0; i < array.length; i++) {
  const liElem = document.createElement("li");
  liElem.textContent = array[i];
  liElem.style.color = "#242424";
  liElem.style.listStyleType = "none";
  liElem.style.paddingRight = "28px";
  liElem.style.fontSize = "17px";
  ulElem.append(liElem);
}

const btnSignUp = createElement("button", {
  color: "#F0F0F0",
  backgroundColor: "#242424",
  border: "none",
  borderRadius: "50px",
  padding: "9px 24px",
  fontSize: "17px",
});
btnSignUp.classList.add("btnSignUp");
btnSignUp.textContent = "Sign Up";
navElem.append(btnSignUp);

const mainContent = createElement("div", {
  margin: "0 auto",
  textAlign: "center",
  paddingBottom: "228px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});
textContent = mainContent.classList.add("content");
headerElem.append(mainContent);

const h1Elem = createElement("h1", {
  fontFamily: "Arimo",
  fontWeight: "700",
  fontSize: "101px",
  lineHeight: "100px",
  textAlign: "center",
});
mainContent.append(h1Elem);
h1Elem.innerHTML = "Finally, all your team’s <br> work in one place";

const pElem = createElement("p", {
  color: "#5B6436D9",
  fontSize: "24px",
  lineHeight: "33px",
});
pElem.innerHTML =
  "Increase your team’s, <strong>speed,collaboration,</strong> and <strong>alignment</strong> by giving everyone <br> an overview of the most importnant work happening across ypur company.";
mainContent.append(pElem);

const btnBox = createElement("div", { marginTop: "47px" });
btnBox.classList.add("btnBox");
mainContent.append(btnBox);

const btnFree = createElement("button", {
  color: "#F0F0F0",
  border: "none",
  backgroundColor: "#1F19E1",
  borderRadius: "50px",
  marginRight: "16px",
  padding: "20px 42px",
  fontSize: "19px",
  fontWeight: "500",
});
btnFree.classList.add("btnFree");
btnFree.textContent = "Get started for free";
navElem.append(btnSignUp);
btnBox.append(btnFree);

const btnWatch = createElement("button", {
  fontWeight: "500",
  fontSize: "19px",
  textDecoration: "none",
  backgroundColor: "inherit",
  border: "1px solid #C6DF5D",
  padding: "20px 73px",
  borderRadius: "50px",
});
btnWatch.classList.add("btnWatch");
btnWatch.textContent = "Watch video";
btnBox.append(btnWatch);

const h2Elem = createElement("h2", {
  marginTop: "16px",
  fontWeight: "400",
  fontSize: "15px",
  color: "#5B6436",
});
h2Elem.textContent = "No credit card required";
mainContent.append(h2Elem);

const modalElem = createElement("modal", {
  position: "fixed",
  inset: "0",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  cursor: "pointer",
  display: "flex",
  visibility: "hidden",
  opacity: "0",
  transition: "opacity 300ms ease-in-out",
});
headerElem.append(modalElem);

const modalMainElem = createElement("modal__main", {
  position: "relative",
  width: "600px",
  backgroundColor: "rgb(229, 255, 118)",
  margin: " auto",
  borderRadius: "20px",
  padding: "30px",
  cursor: "default",
});
modalElem.append(modalMainElem);

const modalTitleElem = createElement("h3", { textAlign: "center" });
modalTitleElem.textContent = "Log In";
modalMainElem.append(modalTitleElem);

const inputName = createElement("input", {
  borderRadius: "20px",
  width: "100%",
  padding: "20px 0",
  margin: "10px 0",
  outline: "none",
  border: "1px solid rgba(91, 100, 54, 0.85)",
  fontSize: "15px",
});
inputName.classList.add("modal__input");
inputName.placeholder = "Name";
// inputName.placeholder.style.paddingLeft = "20px";
modalMainElem.append(inputName);

const inputLastName = createElement("input", {
  borderRadius: "20px",
  width: "100%",
  padding: "20px 0",
  margin: "10px 0",
  outline: "none",
  border: "1px solid rgba(91, 100, 54, 0.85)",
  fontSize: "15px",
});
inputLastName.classList.add("modal__input");
inputLastName.placeholder = "Last name";
modalMainElem.append(inputLastName);

const signInBtn = createElement("button", {
  borderRadius: "20px",
  color: "white",
  backgroundColor: "black",
  padding: "20px 50px",
  width: "100%",
  fontSize: "20px",
  margin: "15px 0",
});
signInBtn.classList.add("modal__btn");
signInBtn.textContent = "Sign In";
modalMainElem.append(signInBtn);

signInBtn.onclick = function () {
  console.log(inputName.value);
  console.log(inputLastName.value);
};

const modalClose = createElement("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "22px",
  position: "absolute",
  top: "10px",
  right: "10px",
});

modalClose.innerHTML = "&#10006";
modalClose.classList.add("modal__close");
modalMainElem.append(modalClose);

document.querySelector("btnFree");
document.querySelector("modal");

const closeModal = (event) => {
  const target = event.target;

  if (target.closest("button")) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = "hidden";
    }, 300);
  }
};

const openModal = () => {
  modalElem.style.visibility = "visible";
  modalElem.style.opacity = 1;
};

btnFree.addEventListener("click", openModal);
modalElem.addEventListener("click", closeModal);
