const { ApolloServer, gql } = require('apollo-server-lambda');
const faunadb = require('faunadb');

const q = faunadb.query

var client = new faunadb.Client({secret: process.env.FAUNA});

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

  type Mutation {
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
      otros: String
    ): Attendee
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    attendees: async () => {
      const results = await client.query(q);
      return results.data.map(([ref,name,preboda,autocar,boda, noviene, 
        vegano, vegetariano, gluten, lactosa, otros]) => ({
        id: ref.id,
        name,
        preboda,
        autocar,
        boda,
        noviene,
        vegano,
        vegetariano,
        gluten,
        lactosa,
        otros
      }))
    }
  },
  Mutation: {
    addAttendee: async ({_, name, preboda, autocar, boda, noviene,
      vegano, vegetariano, gluten, lactosa, otros}) => {
        const results = await client.query(
          q.Create(q.Collection("attendees"), {
            data: {
              name,
              preboda,
              autocar,
              boda,
              noviene,
              vegano,
              vegetariano,
              gluten,
              lactosa,
              otros
            }
          })
        );

      return {
        ...results.data,
        id: results.ref.id
      }
    }
  }
};

const server = new ApolloServer({
  cors: true,
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