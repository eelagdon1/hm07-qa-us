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

Another tool I used is PostMan.  Postman helps run Urban Grocers and provide me the request and response when testing.