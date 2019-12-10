import express from 'express';
import graphqlHTTP from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';
import mongoose from 'mongoose';
import fs from 'fs';

var app = express();

let typeDefs = fs.readFileSync('schema.graphql').toString();
const resolvers = {
    Query: {
        hello: () => 'Ola!',
    },
};

const schema = makeExecutableSchema({typeDefs, resolvers});

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true,
})));

// Connect mongo database
mongoose.connect('mongodb://localhost/graphql');

// start server
var server = app.listen(8080, () => {
    console.log('Listening at port', server.address().port);
});
