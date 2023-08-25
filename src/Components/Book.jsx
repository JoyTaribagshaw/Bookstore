import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ itemId: id }));
    dispatch(fetchBooks());
  };

  return (
    <section className="bookContainer">

      <div>
        <div className="bookInfo">
          <p>{category}</p>
          <h3>{title}</h3>
          <h5>{author}</h5>
        </div>

        <div className="btnsContainer">
          <p>Comments</p>
          <button className="removeBtn" type="button" onClick={handleRemove}>
            Remove
          </button>
          <p className="edit">Edit</p>
        </div>
      </div>

      <div className="progressContainer">
        <ProgressBar />
        <div className="progressPercentage">
          <p className="value">
            {Math.floor(Math.random() * 100)}
            %
          </p>

          {' '}
          completed
          {' '}
        </div>
      </div>

      <div className="moreInfo">
        <p className="chapterLabel">Current Chapter</p>
        <p className="chapterValue">
          Chapter
          {Math.floor(Math.random() * 20)}
        </p>
        <button type="button" className="moreInfoBtn">Update progress</button>
      </div>

    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
