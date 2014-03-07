mean-stack-projeto
==================
How to build:

npm install

bower install

grunt

cd dist

node app

http://localhost:3000


Now the application uses github account for authentication.
There are two missing configurations that you need to provide 
in order to app work.

First, create a new github application at

https://github.com/settings/applications

Fill the fields:

Homepage URL: http://localhost:3000

Authorization callback URL: http://localhost:3000/auth/github/callback

After saving, on the top right will be your 'Client Id' and yout 'Client Secret'.

Edit server.js and alter the variables:

var GITHUB_CLIENT_ID = 'you clientId'
var GITHUB_CLIENT_SECRET = 'you Client Secret'

