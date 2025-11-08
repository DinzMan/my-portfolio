# My Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean blue color theme, smooth animations, and a fully functional contact form.

## Features

- ✨ Modern and clean UI with blue color theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Attractive hero section with animations
- 📧 Contact form with EmailJS integration
- 🎭 Smooth scroll animations using Framer Motion
- 🚀 Fast and optimized performance

## Contact Form Setup (EmailJS)

To enable the contact form to send emails to your email address, you need to set up EmailJS:

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Add an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (recommended) or your preferred email service
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

### Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (thedinzman107@gmail.com)
   - `{{reply_to}}` - Reply-to email (set to `{{from_email}}`)
4. Set the "To Email" field to: `thedinzman107@gmail.com`
5. Note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "General" in the EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Update the Contact Form
1. Open `src/components/_6_contact.jsx`
2. Replace the following values:
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID
   - `YOUR_PUBLIC_KEY` with your Public Key

```javascript
const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key
```

### Step 6: Test the Form
1. Start your development server: `npm start`
2. Fill out the contact form on your website
3. Check your email (thedinzman107@gmail.com) for the message

## Getting Started with Create React App

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
