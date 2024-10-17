const { gql } = require("graphql-tag");

module.exports = gql`
	type User {
		id: ID!
		username: String!
		email: String!
		role: String!
		createdAt: String!
		updatedAt: String!
	}

	type AuthPayload {
		token: String!
		user: User!
	}

	extend type Mutation {
		register(username: String!, email: String!, password: String!): AuthPayload!
		login(username: String!, password: String!): AuthPayload!
	}
`;
