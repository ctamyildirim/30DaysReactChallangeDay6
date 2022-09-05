import React, {useEffect} from 'react'
import { CalenderContext } from '../context/context'
import './calender.css'
import ContentWrapper from './ContentWrapper';


function Calendar() {
  
  const[{}, dispatch] = CalenderContext();

  const date = new Date();
  const date_year = date.getFullYear();
  const date_month = date.getMonth();
  const date_day = date.getDate();
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs' , 'Haziran' , 'Temmuz' , 'Ağustos' , 'Eylül', 'Ekim' , 'Kasım', 'Aralık']

  let reformed_month = months[date_month]

  const set_calendar = () => {
    dispatch({
      type : 'SET_CALENDAR',
      payload : {
        year : date_year,
        month : {
          name : reformed_month,
          index : date_month
        },
        day :date_day
      }
    })
  }
  
  useEffect(() => {
    set_calendar();
  }, []);


  return (
    <div className='calendar'>
        <h1 className='absolute right-10 top-5 text-8xl text-orange-300'>{date_year}</h1>
        <div className='calendarBoard mx-auto mt-10'>
          <ContentWrapper></ContentWrapper>
        </div>
    </div>
  )
}

export default Calendar