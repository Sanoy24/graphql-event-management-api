const { gql } = require("graphql-tag");
module.exports = gql`
	type Event {
		id: ID!
		title: String!
		description: String!
		location: String!
		date: String!
		organizer: User!
		tickets: [Ticket!]!
		createdAt: String!
		updatedAt: String!
	}

	extend type Query {
		events: [Event!]!
		event(id: ID!): Event
	}

	extend type Mutation {
		createEvent(title: String!, description: String!, location: String!, date: String): Event!
		updatedAt(
			id: ID!
			title: String
			description: String
			location: String
			date: String
		): Event!
		deleteEvent(id: ID!): Boolean!
	}
`;
