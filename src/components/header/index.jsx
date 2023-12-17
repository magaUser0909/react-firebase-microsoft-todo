import React from 'react';
import "./Header.scss";

import { Link } from 'react-router-dom';

import SearchToDo from '../ui/searchTodo';

const Header = ({ onChange }) => {
  return (
    <header className='header'>
      <Link to="/" className='logo'>To Do</Link>
      <div className='search_block'>
        <SearchToDo onChange={onChange} />
      </div>
    </header>
  )
}

export default Header