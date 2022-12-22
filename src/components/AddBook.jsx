import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, GET_BOOKS, ADD_BOOK } from './queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook, { data: _, loading: addBookLoading, error: addBookError }] =
    useMutation(ADD_BOOK);

  const [bookName, setBookName] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [authorId, setAuthorId] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    addBook({
      variables: {
        name: bookName,
        shortDescription: bookDescription,
        authorIds: [authorId],
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    setBookName('');
    setBookDescription('');
  };

  if (loading || addBookLoading) return <p>Loading...</p>;
  if (error || addBookError)
    return <p>Error : {error?.message || addBookError?.message}</p>;

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Book name:</label>
        <input
          type='text'
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>

      <div>
        <label>Description:</label>
        <input
          type='text'
          value={bookDescription}
          onChange={(e) => setBookDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Author</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
