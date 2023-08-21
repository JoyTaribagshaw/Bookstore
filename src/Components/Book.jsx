import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ name, author }) => (
  <section className="book">
    <h3>{name}</h3>
    <h5>{author}</h5>
    <button type="button">Remove</button>
  </section>
);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
