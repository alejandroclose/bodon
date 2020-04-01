const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    attendees: [Attendee]!
  }
  type Attendee {
    id: ID!
    name: String!
    preboda: Boolean
    autocar: Boolean
    boda: Boolean
    noviene: Boolean
    vegano: Boolean
    vegetariano: Boolean
    gluten: Boolean
    lactosa: Boolean
    otros: String
  }

  type Mutation{
    addAttendee(
      name: String!
      preboda: Boolean
      autocar: Boolean
      boda: Boolean
      noviene: Boolean
      vegano: Boolean
      vegetariano: Boolean
      gluten: Boolean
      lactosa: Boolean
      otros: String): Attendee
  }
`;

const attendees = {};
let attendeeIndex = 0;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    attendees: () => {
      return Object.values(attendees)
    }
  },
  Mutation: {
    addAttendee: (_, { name, preboda, autocar, boda, noviene,
      vegano, vegetariano, gluten, lactosa, otros }) => {
      attendeeIndex++;
      const id = `key-${attendeeIndex}`;
      attendees[id] = {
        id, name, preboda, autocar, boda, noviene,
        vegano, vegetariano, gluten, lactosa, otros
      }
      return attendees[id];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,

  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});