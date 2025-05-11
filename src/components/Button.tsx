
import React, {useState} from 'react';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {

  const [submitted, setSubmitted] = useState(false);

  function tryClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <button onClick={tryClick}>
      {label} 
      {submitted ? <span>Submitted</span> : <span>Not Submitted</span>}
    </button>
  );
}
export default Button;