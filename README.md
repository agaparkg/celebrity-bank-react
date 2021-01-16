## List of Celebrities in the Movie Industry - React App

![Output](movie.png)

## Modal with [react-modal](https://www.npmjs.com/package/react-modal)

![Output](modal.png)

## Reactstrap Pagination reference: [react-js-pagination](https://www.npmjs.com/package/react-js-pagination)

`npm install react-js-pagination`

## HTML layout compatible with Bootstrap 3 pagination stylesheets.

`npm install bootstrap@3`

### and these on top:

`import Pagination from "react-js-pagination";`

`require("bootstrap/less/bootstrap.less");`

API for all celebrities
[https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1](https://developers.themoviedb.org/3/people/get-popular-people)

You need to put your own "api_key=<<api_key>>" in the url

This api displays only page 1, which contains 20 celebrity infos, change the last number to grab data for different pages

## Deployment

This React App has been deployed to Heroku.

[Click here](https://celebrity-bank.herokuapp.com/#) to see the UI output in Heroku.
