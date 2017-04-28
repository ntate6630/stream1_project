# Stream 1 Project

## Overview

### What is this app for?

This is a cooking website to demonstrate usage of different technologies learnt on the course.

### What does it do?

- This website will allow users to search and browse cooking recipes.
- Follow the instructions for a recipe. 
- Watch videos of people cooking.
- Create an account, login/logout.
- Add personal details in a form to be able to buy the itmes in the shopping basket.
- Sign up for an Email newsletter.

### How does it work

This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with CSS and flexbox.
## Features

### Existing Features
- Header
- Login, Logout, Register links added.
- Forms for user to sign up.
- forms for adding user account details to be able to buy items once registered and signed in.
- Attractive looking font from google fonts used for the main logo and custom made images.
- Nav bar with button links that change colour with mouse hover over them.
- Active Search box to be able to search a database of recipes.
- JSON file Database of recipes
- Responsive web design changes the layout when viewed on either mobile, tablet or full size desktop screens.

### Features Left to Implement
- User Based Features
	- Registration.
	- Login.
	- Logout.
	- Newsletter Email signup.
	- Shopping basket.

## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
	- I use **AngularJS** to handle page routing, I also use it to make calls to the REST API and build custom directives.
	- AngularJS is used to create the search box function for the recipe database and to dynamically route the partial HTML files in to the view of the content area of the web page.
- [npm](https://www.npmjs.com/)
	- **npm** to help manage some of the dependencies in the application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of the libraries and frameworks
 
## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've done that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
  	 `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install

  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request


## Site Testing

The site was tested on the following browswers:

- Internet explorer
- Safari on Mac OSX
- Safari on Mac OSX 
- Firefox Developer Edition
- Google Chrome
- Iphone 4S
- Iphone 7
- Ipad 3

- Appearance:
		On all the browsers the site functions satisfactorily at all screen sizes from 320px and upwards. Certain elements could be such as the Youtube videos could be re-sized and positioned better at different screen sizes but this requires more use of javascript and CSS.



## Credits

The following sites and organizations were used in creating this project. Credits to the respective owners and thanks.

- The Learning People and Code Institute - https://www.codeinstitute.net/
- Jessamyn Smith - Code Institute Mentor - https://github.com/jessamynsmith
- AngularJS Documentation - https://angularjs.org/
- For installing npm and libraries - https://nodejs.org/en/
- Tutorials - http://www.webchannel24.com/acciocode/
- Tutorials - https://www.w3schools.com/
- Recipe and cooking information - http://www.bbc.co.uk/food/recipes/maryhenrysproperappl_67463