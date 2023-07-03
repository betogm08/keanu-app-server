import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLError } from 'graphql';
import { KeanuOptions, ERROR_TYPES } from '../types';

const PLACE_KEANU_API_URL: string = 'https://placekeanu.com';

const throwError = (message: string, codeErrorType: string): never => {
    throw new GraphQLError(message, {
        extensions: {
          code: codeErrorType
        }
    });
}

const typeDefs = `
  scalar SVG

  type Query {
    getKeanuImage(
        width: Int!
        height: Int
        option: String
    ): SVG
  }
`;

const resolvers = {
    Query: {
        getKeanuImage: async (root, args: KeanuOptions) => {
            const { width, height, option } = args;

            if (width === null || width === undefined || Number.isNaN(width)) {
                throwError('Invalid argument value. "width" parameter is required', ERROR_TYPES.BAD_USER_INPUT);
            }

            try {
                const response = await fetch(`${PLACE_KEANU_API_URL}/${width}/${height}/${option}`);
                const json = await response.text();
                return json;
            } catch (error) {
                throwError('An error ocurred while the API call was happening', ERROR_TYPES.BAD_REQUEST);
            }
        },
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
  
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);