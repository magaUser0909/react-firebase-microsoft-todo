import React from 'react';
import "./Form.scss";

import { FiCircle } from "react-icons/fi";
import { useForm } from '../../hooks/useForm';

const Form = ({ onAdd }) => {
  const { value, handleChange, handleCodeKey, handleSubmit } = useForm(onAdd);

  return (
    <form onSubmit={handleSubmit}>
      <div className='block_input'>
        <div className='icon'><FiCircle /></div>
        <input type="text" placeholder='Добавить задачу' value={value} onKeyUp={handleCodeKey} onChange={handleChange} />
      </div>
      <div className='block_btn_add'>
        <button className={value ? "active" : "no_active"} disabled={!value}>Добавить</button>
      </div>
    </form>
  )
}

export default Form