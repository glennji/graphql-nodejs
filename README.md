# Badgey GraphQL server

GraphQL server in Node.js using Express, MongoDB and Mongoose.

## Let's think about data models

```graphql
query {
    achievements(user: "some_id") {
        badge {
            id
            uri
            img {
                tiny
                small
                medium
                large
                xlarge
                huge
                nowyourebeingridiculous
            }
        }
        uri
        series
        series_index
        date
        description
    }
}

```
