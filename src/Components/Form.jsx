import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addedBooks, setAddedBooks] = useState([]);
  const dispatch = useDispatch();

  const handleClickAddBtn = async (e) => {
    e.preventDefault();

    const newItem = {
      item_id: `item${Math.floor(Math.random() * 10000)}`,
      title,
      author,
      category: 'Fiction',
    };
    await dispatch(addBook(newItem));
    setAddedBooks([...addedBooks, newItem]);
    // reset form
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form">
      <header className="form-head">ADD NEW BOOK</header>
      <input
        className="input inputBookTitle"
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button className="AddBtn" type="submit" onClick={handleClickAddBtn}>ADD BOOK</button>
    </form>
  );
};

export default Form;
