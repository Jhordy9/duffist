/* Domains */
export const UserDomain = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    delete: Int!
  }

  type UserLogin {
    token: String
  }
`;

/* Querys */
export const UserQuerys = `
  Users(): [User]
`;

/* Mutations */
export const UserMutations = `
  MergeUser(
    userInput: userInput
  ): [User]
`;

/* Inputs */
export const UserInputs = `
  input userLoginInput {
    email: String!
    password: String!
  }

  input userInput {
    id: ID
    delete: Int
    userData: userData
  }

  input userData {
    name: String!
    email: String!
    password: String!
  }
`;
