# Sprint 7 project

Project 7

For my project, I was tasked to complete 4 tasks and write tests for GET, POST, PUT, and DELETE requests.  

Connect GitHub:
    I was instructed to use Git and GitHub to set up my project.  In order to do so, I first connected my GitHub account to Tripleten.  On top of the Project 7 task page, there will be a widget that says,: "Link GitHub account".  
    
Clone the repo to my computer:
    I will have to clone the repository name, "hm07-qa-us" to my computer.
        1. cd ~ in the terminal to go to the home directory
        2. mkdir projects to create a folder name "projects"
        3. cd projects to change directories into the "projects" folder

To clone the repository, I will have to copy my code from GitHub using ssh "git@github.com:eelagdon1" and enter command "git clone git@github.com:eelagdon1/hm07-qa-us.git" in the terminal.

After the repository has been clone, I go to the terminal and enter the command, "npm install."
The "npm install" will download files.
When the install is finish, enter command "npx jest".  It will run all the tests in the folder.

On my computer, I must find the folder "hm07-qa-us" to access the repository folder.
    1. Open a folder
    2. Select: "Locations"
    3. Select: "Users"
    4. Select: // your name - emmanuelelagdon
    5. Select: "projects" folder
    6. Select: "hm07-qa-us" folder

Once I'm in the "hm07-qa-us" folder, I need to configure the "config.js" file.
    1. Right click on the "config.js"
    2. Select: Open with
    3. Select: Visual Studio Code

This will open Visual Studio Code and the template for the "config.js" file will appear.

Go back to the Project 7 task page and find the "Start Server" button.  It may take a while, but the server will provide an API URL.
When the API URL appears, copy and paste the new API URL to the "config.js" template.

The "config.js" template:
// eslint-disable-next-line no-undef
module.exports = {
    API_URL: "https://3110c5b4-b98f-497f-bd6f-8e78d38bc5fb.serverhub.tripleten-services.com"
}

Make sure to save to the "config.js" file.  This is necessary, so I do not need to copy and paste the API URL every time I need to test my requests.

With the new API URL, I would need to use it to open Swagger and Docs.  For example: {config.API_URL}/api/swagger and {config.API_URL}/docs/.  These documents will help test my request.

Another tool is PostMan to help run Urban Grocers and provide me the request and response when testing.




Testing GET request:
1. Use the swagger and docs to choose the API GET command.
2. API_URL/api/v1/kits/2 as my endpoint.
3. In Postman, insert the API_URL and endpoint to check the response of the status code.  The status code should a 200 code.
4. Modify the template in Visual Studio for the getHandlers.test.js.
5. I will be running two test: 
    - Check the response status code
    - Parse the response and check that the response body contains the expected data
6. // eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Body should contain Orange Juice', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    
    expect(actualResponseBody.name).toBe("For picnic");
});
7. After changing the "test" name and "let" variables, save the file.
8. In the terminal, enter command: "npx jest tests/getHandlers.test.js
9. The terminal will run both test
10. The output for each test:
    - Shoudl return 200 status code
    - Body should contain Orange Juice




Testing POST request
1. Use the swagger and docs to choose the API POST command.
2. API_URL/api/v1/kits as my endpoint.
3. In Postman, insert the API_URL and endpoint to check the response of the status code.  The status code should a 201 code.
4. Select "raw", and change "TEXT" to "JSON".
5. In the request body, insert:
    	"name": "Jollibee",
	"cardId": 2
}
6. Select "send"
7. In the response body, it should look like this:
    {
    "name": "Jollibee",
    "card": {
        "id": 2,
        "name": "Prepare a dish"
    },
    "productsList": null,
    "id": 19,
    "productsCount": 0
}
8. In the Visual Studio Code, open the postHandlers.test.js file.
9. Modify the template in Visual Studio for the postHandlers.test.js.
10. I will be running the same two test: 
    - Check the response status code
    - Parse the response and check that the response body contains the expected data
11. // eslint-disable-next-line no-undef
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


test('Response body should contain "Prepare a dish"', async () => {
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
12. After changing the "test" name, "const" request body, changing the "let" variable, save the file.
13. In the terminal, enter command: "npx jest tests/getHandlers.test.js
14. The terminal will run both test
15. The output for each test:
    - Status code should be 201
    - Response body contains "Prepare a dish"




Testing PUT request
1. Use the swagger and docs to choose the API POST command.
2. API_URL/api/v1/kits/2 as my endpoint.
3. In Postman, insert the API_URL and endpoint to check the response of the status code.  The status code should a 200 code.
4. Select "raw", and change "TEXT" to "JSON".
5. In the request body, enter:
    {
      "productsList": [
    {
      "id": 7,
      "quantity": 3,
      "productsList": "Chicken Joy"
    }
  ],
  "name": "Take out"
}
6. Select "send"
7. The response body looks like this:
    {
    "ok": true,
    "_time_spent": 6,
    "_ip": "::ffff:127.0.0.1",
    "_req_id": "54e29cd8-b229-4693-b5d9-549e45fea21a"
}
8. In the Visual Studio Code, open the putHandlers.test.js file.
9. Modify the template in Visual Studio for the putHandlers.test.js.
10. I will be running the same two test: 
    - Check the response status code
    - Parse the response and check that the response body contains the expected data
11. // eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
		  "id": 7,
		  "quantity": 3
		}
	  ],
	  "name": "Take out"
}

test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Response body should contain "Bread"', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody["ok"]).toBe(true);
});
12. After changing the "test" name, "const" request body, changing the "let" variable, save the file.
13. In the terminal, enter command: "npx jest tests/getHandlers.test.js
14. The terminal will run both test
15. The output for each test: 
    - Status code should be 200
    - Response body contains "ok"




Testing DELETE request
1. Use the swagger and docs to choose the API POST command.
2. API_URL/api/v1/kits/2 as my endpoint.
3. In Postman, insert the API_URL and endpoint to check the response of the status code.  The status code should a 200 code.
4. Modify the template in Visual Studio for the deleteHandlers.test.js.
5. For this test, I would need to choose one handler from the Urban Grocers documentation.  I chose the postHandler.
6. I will be running two test: 
    - Check the response status code
    - Parse the response and check that the response body contains the expected data
7. // eslint-disable-next-line no-undef
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


test('Response body cotains "ok"', async () => {
	let deleteResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		deleteResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(deleteResponseBody["ok"]).toBe(true);
});
8. After changing the "test" name, "const" request body, changing the "let" variable, save the file.
9. In the terminal, enter command: "npx jest tests/getHandlers.test.js
10. The terminal will run both test
11. The output for each test: 
    - Status code should be 201
    - Response body contains "ok" 