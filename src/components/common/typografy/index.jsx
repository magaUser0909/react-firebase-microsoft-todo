import React from 'react';
import "./Title.scss";

import { IoSunnyOutline } from "react-icons/io5";
import { PiStarDuotone } from "react-icons/pi";

const Title = ({ title, color, type, isShowMenu }) => {
  return (
    <div className={`title ${isShowMenu ? "active" : "no_active"}`}>
      <div>
        {isShowMenu && (
          <div className={`sun_icon ${color}`}>
            {type === "myday"
              ? <IoSunnyOutline />
              : <PiStarDuotone />
            }
          </div>
        )}
        <h2 className={color}>{title}</h2>
      </div>
      {type === "myday" && <div className='date'>четверг, 7 декабря</div>}
    </div>
  )
}

export default Title