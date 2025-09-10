import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// Schema
const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    authors: [Author!]!
  }

  type Mutation {
    addAuthor(name: String!): Author!
    addBook(title: String!, authorId: ID!): Book!
  }
`;
// In-memory data
const data = {
    authors: [
        { id: "1", name: "Kate Chopin" },
        { id: "2", name: "Paul Auster" }
    ],
    books: [
        { id: "101", title: "The Awakening", authorId: "1" },
        { id: "102", title: "City of Glass", authorId: "2" },
        { id: "103", title: "Another Book by Paul", authorId: "2" }
    ]
};
// Resolvers
const resolvers = {
    Query: {
        books: () => data.books,
        authors: () => data.authors,
    },
    Book: {
        author: (parent) => data.authors.find(author => author.id === parent.authorId)
    },
    Author: {
        books: (parent) => data.books.filter(book => book.authorId === parent.id)
    },
    Mutation: {
        addAuthor: (_, { name }) => {
            const newAuthor = {
                id: (data.authors.length + 1).toString(),
                name
            };
            data.authors.push(newAuthor);
            return newAuthor;
        },
        addBook: (_, { title, authorId }) => {
            const authorExists = data.authors.some(author => author.id === authorId);
            if (!authorExists) {
                throw new Error(`Author with id ${authorId} not found`);
            }
            const newBook = {
                id: (data.books.length + 101).toString(),
                title,
                authorId
            };
            data.books.push(newBook);
            return newBook;
        }
    }
};
// Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀 Server ready at: ${url}`);
