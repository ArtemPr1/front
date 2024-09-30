function sendData() {
	const data = document.getElementById('inputData').value

	fetch('http://localhost:5000/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data }),
	})
		.then(response => response.text())
		.then(data => {
			alert('Данные успешно отправлены на сервер!')
		})
		.catch(error => {
			console.error('Ошибка:', error)
		})
}

function fetchData() {
	fetch('http://localhost:5000/data')
		.then(response => response.text())
		.then(data => {
			document.getElementById('output').innerText = data
		})
		.catch(error => {
			console.error('Ошибка:', error)
		})
}
