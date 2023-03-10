import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query getBooks {
    books {
      id
      name
      authors {
        name
      }
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      id
      name
      shortDescription
      authors {
        id
        name
        books {
          id
          name
        }
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $name: String!
    $shortDescription: String!
    $authorIds: [ID!]
  ) {
    createBook(
      name: $name
      shortDescription: $shortDescription
      authorIds: $authorIds
    ) {
      name
      id
    }
  }
`;
