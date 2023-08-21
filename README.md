# Vanilla JavaScript Canonical Task

This is a simple web application that fetches posts from an API and displays them on a webpage. It's built using vanilla JavaScript and the Vanilla Framework.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Building with Vanilla](#building-with-vanilla)
- [License](#license)

## Description

This project demonstrates how to use vanilla JavaScript to fetch data from an API and display it on a webpage. It uses the [Vanilla Framework](https://vanillaframework.io/) for styling.

## Demo

Check out the live demo of this project: [Live Demo](https://iksich.github.io/vanilla-js-task/)

## Usage

To use this project, follow these steps:

1. Clone the repository and navigate to the project directory:

git clone https://github.com/Iksich/vanilla-js-task.git
cd vanilla-js-task

2. Install project dependencies:

yarn install

3. Start the application:

yarn start

4. Access the application in your browser at http://localhost:3000.

## Installation

If you want to deploy this project to GitHub Pages or another hosting service, follow these steps:

1. Edit the `index.html` file to include the correct paths for the stylesheet and JavaScript file.

2. If you're using a different API or data source, update the fetch URL in the `src/app.js` file.

3. Build the CSS:

yarn build-css

4. Deploy the contents of the `dist` directory to your hosting service.

### Building with Vanilla

Here's how you can set up the Vanilla Framework for styling in your project:

1. Install Vanilla Framework and Sass as project dependencies:

yarn add sass vanilla-framework

2. In your `package.json`, include the path to `node_modules` when looking for `@imports` in your Sass files. For example, if your build script is named `"build-css"`:
   "build-css": "sass -w --load-path=node_modules src:dist --style=compressed"
   Create a folder named src/ and a file inside called style.scss. Import Vanilla Framework:
   @import "vanilla-framework";
   @include vanilla;

Run the build script to convert Sass files in src/ to CSS in dist/:
yarn build-css

"watch-css": "yarn build-css && sass --load-path=node_modules -w src:dist --style=compressed"
Run the watch script to rebuild CSS on changes:

yarn watch-css
