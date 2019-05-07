function isSelected(el) { 	
	const loginB = document.getElementById('log_account')
	const regB = document.getElementById('reg_account')
	const labelU = document.getElementById('labelU')
	const labelB = document.getElementById('labelB')
	if (el.id === loginB.id) {
		loginB.style.cssText = 'color: white'
		regB.style.cssText = 'color: #B8B8B8' 
		labelU.innerHTML = 'Prosím zadejte Vaši emailovou adresu:'
		labelB.innerHTML = 'Prosím vložte Vaše heslo:'
	} else if (el.id === regB.id) {
		regB.style.cssText = 'color: white'
		loginB.style.cssText = 'color: #B8B8B8'
		labelU.innerHTML = 'Prosím zadejte Vaši emailovou adresu:'
		labelB.innerHTML = 'Prosím vytvořte Vaše heslo (min. 6 znaků):'
	} else {
		console.log('Wrong ID')
	}
}
