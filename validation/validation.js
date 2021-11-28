let form        = document.querySelector(".form")
let username    = document.querySelector("#username")
let password    = document.querySelector("#password")
let seePassword = document.querySelector("#see-password")
// user pattern => up
let up          = /^[a-zA-Z][\w._]{5,23}$/
// evaluate password => ep
let ep          = 0
//evaluate user => eu
let eu          = false
form.addEventListener("submit", e=>{
	if (!(eu && ep===5)) {
		e.preventDefault()
		if (eu==false) {
			form.username.classList.add("is-invalid")
		}
		if (ep!==5) {			
			form.password.classList.add("is-invalid")
		}
	}
})
form.username.addEventListener("keyup", e=> {
	if (e.target.value) {		
	username.textContent = e.target.value.toLowerCase()
		if (up.test(e.target.value)) {
			eu = true
			e.target.classList.add("is-valid")
			e.target.classList.remove("is-invalid")
			username.style.color = "green"
		} else {
			e.target.classList.add("is-invalid")
			username.style.color = "red"
		}
	} else {
		username.innerHTML = "<i>username can not be empty!</i>"
		username.style.color = "red"
		e.target.classList.add("is-invalid")
	}
})
form.password.addEventListener("keyup", e=> {
	if (e.target.value) {
	password.textContent = "*".repeat(e.target.value.length)
	seePassword.textContent = e.target.value
	ep = 0
	ep += /[a-z]/.test(e.target.value) ? 1 : 0;
	ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
	ep += /[0-9]/.test(e.target.value) ? 1 : 0;
	ep += /[\W]/.test(e.target.value)  ? 1 : 0;
	ep += e.target.value.length >= 6   ? 1 : 0;

		if (ep===5) {
			e.target.classList.add("is-valid")
			e.target.classList.remove("is-invalid")
			password.style.color = "green"
		} else{
			e.target.classList.add("is-invalid")
			password.style.color = "red"
		}
	} else{
		password.innerHTML = "<i>Password can not be empty!</i>"
		seePassword.innerHTML = "<i>Password can not be empty!</i>"
		password.style.color = "red"
		e.target.classList.add("is-invalid")
	}
})
