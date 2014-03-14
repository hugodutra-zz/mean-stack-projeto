Mean Stack sample project
==================
##How to build:

* npm install
* bower install
* grunt
* cd dist
* node server
* http://localhost:3000

### ATTENTION: 

Now the application uses github account for authentication.
There are two missing configurations that you need to provide 
in order to app work.

* First, create a new github application at `https://github.com/settings/applications`

* Fill the fields: `Homepage URL: http://localhost:3000`

* Authorization callback URL: `http://localhost:3000/auth/github/callback`

* Set the enviroment variables before running de server:     
    * `GITHUB_CLIENT_ID = 'your clientId'`
    * `GITHUB_CLIENT_SECRET = 'your Client Secret'`

* optional: you can create a script to to help set this variables:

    #!/bin/bash  
    export GITHUB_CLIENT_ID=your clientId  
    export GITHUB_CLIENT_SECRET=yoir Client Secret  
    node server