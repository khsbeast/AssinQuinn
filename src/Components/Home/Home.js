import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-bidirectional-infinite-scroll';
import moment from 'moment'
import './Home.css'
import Build from './build';
import req from '../api/api';
import Box from '../Box/Box';
import Modal from '../Helpers/Modal/Modal';
import Navbars from '../Navbar/Navbar';
import obj from '../api/request'
import Spinner from '../Helpers/Spinner/Spinner';


function Home() {

  //Handling all the States and api data

  const [words, setword] = useState(null)
  const [response, setresponse] = useState(null)
  const [open, setopen] = useState(false);
  const [calendar, setcalendar] = useState([]);
  const  value = moment()
  const [data, setdata] = useState(null)

  const call = async () => {
    const obje = await req(obj)
    const map = new Map();
    const c = obje.data.responseobjects[0].posts;
    for (let i = 0; i < c.length; i++) {
      console.log(JSON.stringify(c[i].calendardatetime).slice(1, 11))
      map.set(JSON.stringify(c[i].calendardatetime).slice(1, 11), c[i])
    }
    setdata(map)
    setresponse(obje)
  }

  useEffect(() => {
    const startday = value.clone().startOf("year").startOf("month").startOf("week")
    const endday = value.clone().endOf("year").endOf("month").endOf("week")
    console.log(startday)
    console.log(endday)
    let a = [...Build(startday, endday)]
    setcalendar(a);
    call()
  }, [])

  //Scroll handle sections

  const handleScrollUp = () => {
    const startday = calendar[0][0].clone().subtract(35, "day")
    const endday = calendar[0][0].clone().subtract(1, "day")
    const c = Build(startday, endday)
    c.push(...calendar)
    setcalendar(c)
  }

  const handleScrollDown = () => {
    console.log(calendar[calendar.length - 1][6])
    const startday = calendar[calendar.length - 1][6].clone().add(1, "day")
    const endday = calendar[calendar.length - 1][6].clone().add(1, "year")
    const tem = calendar.concat(Build(startday, endday))
    setcalendar(tem)
  }

  const handleOnScroll = (position, previousPosition) => {
    const diffScroll = position - previousPosition
    const direction = diffScroll > 0
      ? 'down'
      : 'up'

    console.log(`Scroll ${direction} to ${position}`)
  }

    //Populating the array with recieved data 
  
  const handleclick = (word) => {
    setopen(true)
    setword(word)
  }
  const closeModal = () => { setopen(false) }
  let c = []
  if (data) {
    c.push(<div key={+new Date()} className='calendar'>
      {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div className='day'>
              <Box oncl={word => handleclick(word)} date={day.format("D")} day={day.format("dddd")} mon={day.format("MMM")} year={day.format("YYYY")} map={data} caldate={day.format()}></Box>
            </div>
          ))}
        </div>
      ))}
    </div>)
  }
  else
  {
    return (
    <div>
    <Navbars/>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'25%',paddingBottom:'100%'}}>
    <Spinner/>
    </div>
    </div>
    );
  }


  //Handing diffrent UI based on state system 

  if (open) {
    return <Modal close={() => closeModal()} word={words} ob={response.data.responseobjects[0].posts} />;
  }
  else {
    return (
      <div className='wrap'
        style={{
          height: '88.6vh',
          WebkitOverflowScrolling: 'hidden'
        }}>
        <Navbars />
        <InfiniteScroll
          onReachBottom={handleScrollDown}
          onReachTop={handleScrollUp}
          onScroll={handleOnScroll}>
          {c}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Home;
