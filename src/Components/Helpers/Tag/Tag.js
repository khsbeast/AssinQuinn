import React from 'react';
import './Tag.css'

function Tag({a,b,c,d,e}) {
  return(
    <div className="tag">
    {a === true ? <div className='tag1'>Cu</div> : <div></div>}
    {b === true ? <div className='tag2'>Pr</div> : <div></div>}
    {c === true ? <div className='tag3'>HC</div> : <div></div>}
    {d === true ? <div className='tag4'>DC</div> : <div></div>}
    {e === true ? <div className='tag5'>C</div> : <div></div>}
  </div>
  );
}

export default Tag;
