import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from './queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
  const [selectedId, setSelectedId] = useState('');
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul>
        {data.books.map((book) => (
          <li
            key={book.id}
            onClick={() => {
              console.log('onClick> book.id: ', book.id);
              setSelectedId(book.id);
            }}
          >
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedId} />
    </div>
  );
};

export default BookList;
