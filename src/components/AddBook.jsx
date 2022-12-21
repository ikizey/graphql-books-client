import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from './queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <form>
      <div>
        <label>Book name:</label>
        <input type='text' />
      </div>

      <div>
        <label>Description:</label>
        <input type='text' />
      </div>

      <div>
        <label>Author</label>
        <select>
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
