## CPU Temperature Meter

#### Installation:

Download the code from the git repository and make sure you have `yarn` installed on your system.

- **_index.html_** file is responsible for the frontend
- **_temperature.js_** is responsible for the backend

#### Run:

In order to run this application, use the command `yarn serve` in the terminal window and
open the frontend webpage by accessing http://localhost:3000/

#### External packages/frameworks used:

- **_express.js_** to create the backend server
- **_sockets.io_** for web sockets
- **_systeminformation_** to get the information about the computer from the client
- **_osx-temperature sensor_** for better macOS support from the systeminformation package
