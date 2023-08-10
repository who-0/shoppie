Mini online e shop app {developing}

"proxy":"localhost:3000"

"setup-production": "npm run install-client && npm run build-client && npm install",
"install-client": "cd client && npm install",
"build-client": "cd client && npm run build",
"server": "nodemon server.js --ignore client",
"client": "npm start --prefix client",
"start": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
