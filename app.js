import express from 'express';
import graphqlHTTP from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';
import mongoose from 'mongoose';
import fs from 'fs';
import AchievementModel from "./models/achievement";
import BadgeModel from "./models/badge";
import BadgeImageModel from "./models/badgeImage";

var app = express();

let typeDefs = fs.readFileSync('schema.graphql').toString();
const resolvers = {
    Query: {
        hello: () => 'Ola!',
        achievements: () => AchievementModel.find().exec(),
        achievement: (_, args) => AchievementModel.findOne(args).exec(),
    },
    Achievement: {
        badge: (obj) => BadgeModel.findOne({ id: obj.badge_id }).exec(),
    },
    Badge: {
        img: (obj) => BadgeImageModel.findOne({ badge_id: obj.id }).exec(),
    }
};

const schema = makeExecutableSchema({typeDefs, resolvers});

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true,
})));

app.use(express.static('badges'));

// Connect mongo database
mongoose.connect('mongodb://localhost/graphql');

// start server
var server = app.listen(8080, () => {
    console.log('Listening at port', server.address().port);
});
