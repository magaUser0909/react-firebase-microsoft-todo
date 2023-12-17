import React, { useState } from 'react';
import "./Sort.scss";

import { TbArrowsSort } from "react-icons/tb";
import { PiStarDuotone } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { BsWindowPlus } from "react-icons/bs";

const Sort = ({ color }) => {
  const [isShow, setShow] = useState(false);

  const hideShow = () => setShow(false);

  return (
    <div className='sort'>
      <button onClick={() => setShow(!isShow)} className={`btn ${color}`}>
        <span className='icon'><TbArrowsSort /></span>
        <span className='title'>Сортировка</span>
      </button>

      {isShow && (
        <div className='sorting_list'>
          <div className='title'>Порядок сортировки</div>
          <ul>
            <li onClick={hideShow}>
              <span className='icon'><PiStarDuotone /></span>
              <span className='title'>Важность</span>
            </li>
            <li onClick={hideShow}>
              <span className='icon'><CiCalendarDate /></span>
              <span className='title'>Дата выполнения</span>
            </li>
            <li onClick={hideShow}>
              <span className='icon'><TbArrowsSort /></span>
              <span className='title'>По алфавиту</span>
            </li>
            <li onClick={hideShow}>
              <span className='icon'><BsWindowPlus /></span>
              <span className='title'>По дате создания</span>
            </li>
          </ul>
          <div className='p-3'>Сортировка в процессе разработки!</div>
        </div>
      )}
    </div>
  )
}

export default Sort