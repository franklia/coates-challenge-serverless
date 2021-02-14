# How to run on local

These instructions will get you a copy of the api up and running on your local machine for development and testing purposes.

## Prerequisites

- NPM
- React.js
- Node version 14.15.4 or higher
- Google Chrome or Firefox

## Installation

Clone the repo and install dependencies:

- Clone the repo git clone https://github.com/franklia/coates-challenge-serverless.git
- Navigate into the repo: cd coates-challenge-serverless
- Run npm install to install the node modules

## Set up your environment variables:

Create an .env file in the root directory using the template below

- LOCAL_PATH=[enter your local path - you can find this by typing `pwd` in the terminal of the root directory]

\*\* Note to self, to deploy to AWS, use this instead: LOCAL_PATH=/var/task

# Launch app:

- Run `serverless offline` to start your local server, and check the test route on http://localhost:3001/dev/test

## Set up the frontend app:

Set up the frontend app by following the README file here: https://github.com/franklia/coates-challenge-ui.git
