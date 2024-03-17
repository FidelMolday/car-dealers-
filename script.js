$(document).ready(function () {
	$('.btn').click(function () {
		$('nav ul').slideToggle(1500)
	})
})

const form = document.getElementById('form')

const onSubmit = () => {
	if (form.checkValidity()) {
		alert(
			'Thank you, We have received your inquiry and we will get back to you shortly.'
		)
	}
}
