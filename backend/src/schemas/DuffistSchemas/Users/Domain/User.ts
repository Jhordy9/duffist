// Domains

export const UserDomain = `
  type User {
    id: Int
    name: String!
    email: String!
    password: String!
    profiles: [Profile]
  }
`;
