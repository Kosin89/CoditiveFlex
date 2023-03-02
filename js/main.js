const burgerBtn = document.querySelector(".nav__burger")
const navItemsMobile = document.querySelector(".nav__items-mobile-box")
const burgerIcon = document.querySelector(".fa-bars")
const xIcon = document.querySelector(".fa-xmark")
const dotsHeader = document.querySelector(".header__dots-box")
const dotsOpinion = document.querySelector(".opinion__dots-box")
const dotsPartner = document.querySelector(".partner__dots-box")
const footerYear = document.querySelector(".footer__bottom-year")




const showMenu = () => {
   burgerIcon.classList.toggle("show")
   xIcon.classList.toggle("show")
   navItemsMobile.classList.toggle("nav__items-mobile-box--active")
}

for (let i = 0; i < 1500; i++) {
   const div = document.createElement("div")
	div.classList.add("dot")
	dotsHeader.append(div)
}

for (let i = 0; i < 1500; i++) {
   const div = document.createElement("div")
	div.classList.add("dot")
	dotsOpinion.append(div)
}

for (let i = 0; i < 1800; i++) {
   const div = document.createElement("div")
	div.classList.add("dot")
	dotsPartner.append(div)
}

const handleCurentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurentYear()
burgerBtn.addEventListener("click", showMenu)
