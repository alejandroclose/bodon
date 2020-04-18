const { ApolloServer, gql } = require('apollo-server-lambda');
const faunadb = require('faunadb');

const q = faunadb.query

var client = new faunadb.Client({secret: process.env.FAUNA});

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    guestbook: [Note]!
  }
  type Attendee {
    id: ID!
    name: String!
    preboda: Boolean
    autocarpre: Boolean
    boda: Boolean
    autocarboda: Boolean
    noviene: Boolean
    plusone: String
    food: String
    otros: String
  }

  type Note {
    id: ID!
    ts: String!
    name: String!
    message: String!
  }

  type Mutation {
    addAttendee(
      name: String!
      preboda: Boolean
      autocarpre: Boolean
      boda: Boolean
      autocarboda: Boolean
      noviene: Boolean
      plusone: String
      food: String
      otros: String
    ): Attendee

    addNote(
      name: String!
      message: String!
    ): Note
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    guestbook: async() => {
      const results = await client.query(q.Paginate(q.Match(q.Index("all_notes"))));
      console.log(results)
      return results.data.map(([ref,ts, name, message]) => ({
        id: ref.id,
        ts: ts,
        name,
        message
      }))
    },
  },
  Mutation: {
    addAttendee: async (_,{ name, preboda, autocarpre, boda, autocarboda, noviene,
      plusone, food, otros}) => {
        const results = await client.query(
          q.Create(q.Collection("attendees"), {
            data: {
              name,
              preboda,
              autocarpre,
              boda,
              autocarboda,
              noviene,
              plusone,
              food,
              otros
            }
          })
        );

      return {
        ...results.data,
        id: results.ref.id
      }
    },
    addNote: async (_,{name, message}) => {
      const results = await client.query(
        q.Create(q.Collection("guestbook"), {
          data: {
            name,
            message
          }
        })
      );
      return {
        ...results.data,
        id: results.ref.id
      }
    },
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