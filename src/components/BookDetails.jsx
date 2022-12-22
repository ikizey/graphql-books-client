import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_BOOK } from './queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data, refetch } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  useEffect(() => {
    console.log('useEffect> bookId: ', bookId);
    // console.log(data?.book);
    refetch({ id: bookId });
  }, [bookId, refetch]);
  console.log('BookDetails> bookId: ', bookId);
  console.log('BookDetails> data: ', data);
  if (error) return;
  if (loading) {
    console.log('loading...');
    return <p>Loading...</p>;
  }

  return (
    <>
      {data?.book && (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.shortDescription}</p>
          <p>{data.book.authors[0].name}</p>
          <p>Other books by this author:</p>
          <ul>
            {data.book.authors[0].books.map((otherBook) => (
              <li key={otherBook.id}>{otherBook.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BookDetails;
