# alert-sample1

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Features
AlertReducer
1.	The default time limit is 10s (when the time is up or the user clicks close icon, the alert will be removed from the view.	
2.	addAlert with timeLimit, text, link, alertType, id, alertTitle will be passed on dispatch.
3.	generated unique id for each alert
4.	import useAlertReducer hooks
5.	alertTypes( error, warning, info, success )

AlertManager
1.	display all active alerts and show add new alert form
2.	alerts are positioned on the top right of the screen
3.	AlertManager is in App.js
4.	Key & id be the unique id of the alert.

AlertList
1.	Submission button would fire to AlertReducer
2.	Since useReducer is used for component state, I used AddNewForm submission and all alerts are in AlertManager component. If not, the alerts in AlertsExample are not updated from the AddNewForm submission. 

AlertMessage 
1.	functional component && stateless
2.	use MUI alert design
3.	color and theme are followed with MUI.
4.	link is clicked if it is present, otherwise not.
5.	Alert Title is optional.
