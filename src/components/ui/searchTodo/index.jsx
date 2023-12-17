import React from 'react';
import "./SearchTodo.scss";

import { VscSearch } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { useSearchTodo } from '../../../hooks/useSearchTodo';

const SearchTodo = ({ onChange }) => {
  const { value, handleChange, onFocus, onBlur } = useSearchTodo(onChange);

  return (
    <div className="search_todo" onClick={onFocus}>
      <div className='search_icon'><VscSearch /></div>
      <input type="text" onFocus={onFocus} onBlur={onBlur} placeholder="Поиск" value={value} onChange={handleChange} />
    </div>
  )
}

export default SearchTodo;