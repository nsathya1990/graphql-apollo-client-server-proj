# GraphQL Apollo Client Server

This folder contains the backend server for the `graphql-apollo-client-proj` application. The server is a simple Express-based GraphQL API using local JSON data (currently).

## Features

- Express.js server listening on port `6969`
- GraphQL endpoint at `/graphql`
- Dependencies include `express`, `express-graphql`, `cors`, etc.
- Mock user data loaded from `MOCK_DATA.json`

## Getting Started

1. **Install dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Run the server**
   ```bash
   npm start # or node index.js
   ```

   The server will log:
   ```
   Server running
   ```

3. **(Optional) Enable GraphQL**
   Uncomment the GraphQL-related code in `index.js` and ensure `schemas` are defined. You can then visit `http://localhost:6969/graphql` to use GraphiQL.

## Project Structure

```
server/
├── index.js          # main entry point
├── MOCK_DATA.json    # sample data
├── package.json      # dependencies and scripts
└── schemas/          # GraphQL schema definitions
    ├── index.js
    └── type-defs/
        └── UserType.js
```

## Repository

The project is hosted at: `https://github.com/nsathya1990/graphql-apollo-client-server-proj`

## License

This project is released under the ISC license.