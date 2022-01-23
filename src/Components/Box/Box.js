import React, { useState } from 'react';
import './Box.css'
import StarRating from '../Helpers/Star/Star';
import Tag from '../Helpers/Tag/Tag';

//This component is responsible each Calendar Box in our View


const Box = ({ mon, caldate, day, date, map, oncl, year }) => {
  const val = caldate.toString().slice(0, 10)
  const comb = mon + ' ' + year

  //Getting the required tags

  if (map.get(val)) {
    const ob = map.get(val)
    console.log(ob.typeofday)
    let a = false;
    let b = false;
    let c = false;
    let d = false;
    let e = false;
    if (ob.typeofday) {
      for (let i = 0; i < ob.typeofday.length; i++) {
        if (ob.typeofday[i] === "hair cut")
          a = true;
        if (ob.typeofday[i] === "protein treatment")
          b = true;
        if (ob.typeofday[i] === "hair color")
          c = true;
        if (ob.typeofday[i] === "deep conditioning")
          d = true;
        if (ob.typeofday[i] === "clarifying")
          e = true;
      }
    }
    //If our map contains an entry for that calendar date

    return (
      <div>
        <div onClick={() => oncl(ob)} className={day === "Sunday" ? 'Box2' : 'Box'}>
          {date === '1' ? <div className='text'>{date}
            <span className='Month'>{mon}</span>
          </div> : <div className='text'>{date}</div>}
          <StarRating value={ob.rating} />
          <img src={ob.media[0].mediaurl} style={{ width: '100%', height: 'auto', maxHeight: '50%', objectFit: 'contain' }} />
          <Tag a={a} b={b} c={c} d={d} e={e} />
        </div>
      </div>
    )
  }
  else {
    //If out map does not contains an entry for that calendar date

    return (
      <div>
        <div className={day === "Sunday" ? 'Box2' : 'Box'}>
          {date === '1' ? <div className='text'>{date}
            <span className='Month'>{mon === "Jan" ? comb : mon}</span>
          </div> : <div className='text'>{date}</div>}
        </div>
      </div>
    )
  }
}

export default Box;
