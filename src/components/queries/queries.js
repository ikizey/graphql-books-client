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

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`;
