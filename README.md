# Listen up API

#### Author : Jordi Cuevas / jordicuevas (at)gmail(dot)(com)

The web service is a radio project called “ListenUp”.

## Installation

clone the Listen up the repo and install dependencies using

```bash
yarn install
```

or

```bash
npm install
```

cd into the project folder and run

```bash
yarn start
```

or

```bash
npm start
```

## Endpoints available

Lists all users who ever played a track and gives a detailed list of tracks played by a
specific user (tracks are represented by a track ID).

```bash
http://localhost:3001/api/plays
```

Returns a list of users with links to their respective user details:

```bash
http://localhost:3001/api/friends
```

Return detailed information about a user, including the number of unique tracks the user has played.

```bash
http://localhost:3001/api/users/:username
```

## Tests

You can check endpoints using Jest

```bash
yarn test
```

or

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
