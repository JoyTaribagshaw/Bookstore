import Book from './Book';

const Books = () => {
  const books = [{
    name: 'Geek Girl',
    author: 'Holly Smalle',
  }, {
    name: 'Why you act the way you do',
    author: 'Tim Lahaye',
  }, {
    name: 'Things fall apart',
    author: 'Chinua Achebe',
  }];

  return (
    <div className="book">
      {books.map((book) => <Book key={book.name} name={book.name} author={book.author} />)}
    </div>
  );
};

export default Books;
