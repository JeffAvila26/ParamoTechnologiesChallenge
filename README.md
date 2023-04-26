# ParamoTechnologiesChallenge

This challenge is based on making a user registration on an online gaming and betting website and then making any functional feature on it.


## Tabla de contenidos

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)

## Installation

The following library versions must be installed:
 - Cypress: 12.10.0
 - Node: 16.16.0

## Usage

In this project the Page object model (POM) design pattern was used as a base to divide the elements by pages and be better organized, commands (commands.js) were created to emphasize their own functionalities such as registering users or login, to be used in the hook before each. Actions (actions.js) were created for the application itself, such as writing on an input or selecting an option from a dropdown. A configuration file (Cypress.config.js) was created in which is hosted JSON usage information of the application, such as URLs to use or users to register or login. A file called cofig.json was created in which we can change the environment in which we work, I only added it for reference, the logic was not implemented because there was no use case. Some items to take into account: 

- To change the registration email or login (They are the same) must be done in the Cypress.config.js file in the "env" parameter.

- in the before each we have 2 commands, 1 to register (cy.authenticate) and another one to login (cy.login) to use them you must comment one and uncomment the other one

- The login command does session validation to know if there is an active session or not at the moment of relaunching a test, it does a different flow depending on the case.

## Contributing

This project is carried out in order to implement a test development for a challenge of the company Paramo Technologies for a position of Quality Analyst.

## Credits

Jefferson Avila
Paramo Technologies
