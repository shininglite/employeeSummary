# Team Profile Generator

## Description
This application generates a web page of a company or project team. The web page that is generated displays an attractive card for each of three team member types: Manager, Engineer, and Intern, with relevant contact information such as their name, id number and email address. 

Other information presented depends on their title: 
- Manager includes an office number 
- Engineer includes a github name 
- Intern includes a school name

The application will builds a team with one manager and as many engineers and interns as you want.

## Development
This application was built using node.js, which is server-side JavaScript. It uses Bootstrap css framework and classes.

## Usage
To use this application:

- Clone the GitHub repository at: https://github.com/shininglite/employeesummary/

- Download and install node.js

- From terminal (Mac) or Bash command line (Windows), run "npm install node.js"

- To automatically install dev dependencies, run "npm i"

- The application itself runs from the command line, run "node app.js"

- You will be prompted to enter a manager and as many engineers and interns as you like

- Choose done when you have no more team members to enter

- The resulting html file appears in an output directory as output.html, and is ready to publish on the web.

## Enhancements
This application is fully functional but can be developed further. 

### Possible improvements include: 
- checking input for unique IDs, so that new team members would not have the same ID as an existing member
- verifying input to require correctly entered email addresses, and not allowing numbers or special characters in the name field
- extending application to allow for custom team member types, and to allow removal of existing team member types

## Developers
Maxwell Hankner
Tom van Deusen
Yeng Vang

### Thank you for checking out this project!