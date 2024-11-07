// src/components/LinkButton.js
import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="mt-4 inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg text-center transition-colors"
    >
      {text}
    </Link>
  );
};
