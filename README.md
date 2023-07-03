
# keanu-app-server

This application handles request to https://placekeanu.com/ API.


## Installation

Clone this repo and run the following commands:

```bash
  cd keanu-app-server
  npm install
```
    
## Deployment

To deploy this project in your local please run:

```bash
  npm start
```

To deploy this project in a docker container please run:

```bash
  docker build . -t keanu-app-server
  docker run -p 4000:4000 -d keanu-app-server
```

The application will run on http://localhost:4000


## Tech Stack

NodeJS, Apollo Server, GraphQL and Typescript


## Authors

- [@betogm08](https://github.com/betogm08)

