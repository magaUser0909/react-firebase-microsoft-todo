import React from 'react';
import "./ModalRemoveWindow.scss";

const ModalRemoveWindow = ({ setRemove, onRemove }) => {
  return (
    <div className='modal_remove_window'>
      <div className='window'>
        <div className="content">
          <div className='label'>
            Элемент <span>"</span>f<span>"</span> будут удален без возможности восстановления.
          </div>
          <p className="description">Вы не сможете отменить это действие.</p>
        </div>
        <div className="footer">
          <button onClick={() => setRemove({ data: {}, isOpen: false })} className='gray'>Отмена</button>
          <button onClick={onRemove} className='red'>Удалить задачу</button>
        </div>
      </div>
    </div>
  )
}

export default ModalRemoveWindow