// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	"name": "Jollibee",
	"cardId": 2
}

test('Status code should be 201', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});


test('Response body should contain "null"', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody["productsList"]).toBe(null);
});