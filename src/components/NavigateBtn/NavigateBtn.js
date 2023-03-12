import React from 'react'
import { useNavigate } from "react-router-dom";
import './NavigateBtn.scss'

const NavigateBtn = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="app__navigateBtn custom__button" onClick={goBack}>
        wróć
      </button>
    </div>
  );
}

export default NavigateBtn