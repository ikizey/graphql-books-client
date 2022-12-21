import AddBook from './components/AddBook';
import BookList from './components/BookList';

const App = () => {
  return (
    <div>
      <h1>Books:</h1>
      <BookList />
      <AddBook />
    </div>
  );
};

export default App;
