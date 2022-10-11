# React & XSS

React generally protects you agains XSS unless you're doing something problematic like passing unsafe data into `dangerous` HTML attributes like `href`.
In [App.js](./src/App.js) you'll find an illustration of exactly that. In order to play with it:
- clone the repo: `git clone https://github.com/veryriskyrisk/react-simple-xss.git`
- run: `npm i`
- start the app: `npm start`
- open the browser and point it to: `http://localhost:3000/#javascript:alert('xss')`
- observe what happens when you click the links

## Learn more
When working with frontend HTML and Javascript it's vital to memorize rules described here: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html - this cheat sheet being the best resource summarizing dangers and protection strategies against XSS. Context used in this example (`dangerous` HTML attribute) is mentioned here: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#dangerous-contexts 


One of the strategies to combat XSS is to use sanitizer, if you're looking for a DOM one this is the obvious choice: https://github.com/cure53/DOMPurify

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

