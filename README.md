# MyReads Project
---
This is a React and Node.js web-based application that allows users to search for books and categorize books individually by status (currently reading, want to read, and read). 

## Table of Contents
---
* [Project-Overview](#project-overview)
* [Installation](#installation)
* [Important](#important)
* [Dependencies](#dependencies)
* [Contributions](#contributions)

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project-Overview
---
For the **MyReads** project, I began with starter files provided by Udacity that was created with [Create React App](https://github.com/facebookincubator/create-react-app). I added user interaction features such as being able to assign books to a certain shelf by selecting a reading status, search for and adding books, and moving books between shelves. 

There is a backend server that was provided with the starter files. The backend server hosts methods that all users to grab the book data. 

## Installation
---
**You will need to have Node.js downloaded in order to use this application. If you do not have it, download it from [here](https://nodejs.org/en/).**

1. Clone or download this repository from GitHub to your local machine.

2. Using terminal or a command line, enter the folder directory that was cloned or downloaded and install all project dependencies with the command `npm install`. To start the backend server, run the command `npm start` and a new window will start up in your browser. In the event a new window does not appear, go to `http://localhost:3000` in your browser. 

3. With the app running, you should see 3 shelves on the homepage with books on it. There will be a green circle with a white arrow on the bottom right of each book. If you click the circle, a dropdown menu will appear that allows you to classify and re-classify books between shelves. 

4. To add a book, scroll to the bottom of the app and click the green circle with the plus sign. It will direct you to the search page. Begin typing an author's name or keyword and certain books will begin to populate. You can assign a book to a particular shelf using the instructions from step 3. To return to the homepage, click the app's back arrow next to the search input. There are limits to what books can be searched for, click [here](#Important) to read more about what they are. 

## Important
---
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Other dependencies you may want to install include: `npm install --save react-router-dom` (for rendering purposes) and `npm install --save escape-string-regexp` (for the search feature of the app). 

## Dependencies
---
* [Udacity](https://github.com/udacity) for starter files.
* [Udacity Course](https://www.udacity.com).
* [Create-React-App](https://www.npmjs.com/package/create-react-app) boilerplate for React application.
* [React Docs](https://reactjs.org/) for React documentation.
* [FreeCodeCamp](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc)
* [Maeva NAP MyReads LiveStream](https://www.youtube.com/watch?v=i6L2jLHV9j8&t=9799s)

## Contributing
---
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
