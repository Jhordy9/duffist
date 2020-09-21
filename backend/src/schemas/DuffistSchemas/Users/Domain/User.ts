/* Domains */
export const UserDomain = `
  type User {
    id: ID!
    name: String
    email: String
    password: String
    hasDelete: Boolean
  }

  type UserLogin {
    token: String
  }
`;

/* Querys */
export const UserQuerys = `
  Users(
    filters: usersFilters
  ): [User]
`;

/* Mutations */
export const UserMutations = `
  CreateUser(
    userInput: userInput
  ): User
`;

/* Inputs */
export const UserInputs = `
  input userLoginInput {
    email: String!
    password: String!
  }

  input userInput {
    id: ID
    hasDelete: Boolean
    userData: userData
  }

  input userData {
    name: String!
    email: String!
    password: String!
  }

  input usersFilters {
    id: ID
    name: String
  }
`;
