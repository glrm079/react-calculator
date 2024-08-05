import React from 'react';

function Button({ number, onClick, backgroundColor, backgroundHover }) {
  return (
    <button
      onClick={() => onClick(number)}
      className={`${backgroundColor || 'bg-zinc-800'} ${backgroundHover ? `hover:${backgroundHover}` : 'hover:bg-zinc-700'} text-zinc-50 p-3 rounded w-auto h-16`}
    >
      {number}
    </button>
  );
}

export default Button;
