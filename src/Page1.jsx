import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div>
      <h1>This is Page 1</h1>
      <Link to="/page1/detailA">Detail1A</Link>
      <Link to="/page1/detailB">Detail1B</Link>
    </div>
  )
}

export default Page1;