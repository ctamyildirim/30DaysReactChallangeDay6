import { CalenderContext } from '../context/context'
import './contentwrapper.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'



function ContentWrapper() {
  
  const [{data, dynamic_month , day , month }, dispatch] = CalenderContext();

  var counter = dynamic_month
  const next = () => {
    if(counter < 11){counter++}
    else if ( counter === 11){ counter = 0}
    dispatch({
      type : 'SET_MONTH',
      payload : counter
    })
  }
  const prev = () => {
    if(counter > 0){counter--}
    else if ( counter === 0){ counter = 11}
    dispatch({
      type : 'SET_MONTH',
      payload : counter
    })
  }

  return (
    <>
      <div className='flex justify-between mb-10'>
        <div className='text-8xl'>
            {data[dynamic_month].name} Takvimim
        </div>
        <div className='flex items-end mr-10 text-3xl'>
          <AiOutlineArrowLeft onClick={prev} className='text-orange-200 bg-amber-600 rounded-full mr-5 cursor-pointer transition-all duration-500 hover:scale-125'></AiOutlineArrowLeft>
          <AiOutlineArrowRight onClick={next} className='text-orange-200 bg-amber-600 rounded-full cursor-pointer transition-all duration-500 hover:scale-125'></AiOutlineArrowRight>
        </div>
      </div>
      <div className='board w-full p-8 shadow-xl shadow-amber-800'>
        <div className='grid grid-cols-7 gap-2 mb-2 text-2xl'>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Pazartesi</div>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Salı</div>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Çarşamba</div>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Perşembe</div>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Cuma</div>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Cumartesi</div>
          <div className='flex items-end justify-center shadow-amber-800 shadow-lg rounded-lg bg-amber-600'>Pazar</div>
        </div>
        <div className='grid grid-cols-7 gap-2'>
          {
             [...Array(data[dynamic_month].skip_days)].map((value , idx) =>{
                  return(
                    <div className='h-24 shadow-lg rounded-lg shadow-amber-800 flex items-center justify-center text-2xl opacity-40'>
                      {data[dynamic_month === 0 ? 11 : dynamic_month-1].total_days - data[dynamic_month].skip_days + idx + 1}

                    </div>
                  )
             })
          }
          {
            [...Array(data[dynamic_month].total_days)].map((value , idx) =>{
              if(idx + 1 === day && dynamic_month === month.index){
                return (
                  <div className='h-24 shadow-lg rounded-lg shadow-amber-800 flex items-center justify-center text-2xl bg-orange-200 hover:bg-orange-400 transition-all duration-300'>Today</div>
                )
              }
              return(
                <div className='h-24 shadow-lg rounded-lg shadow-amber-800 flex items-center justify-center text-2xl hover:bg-orange-400 transition-all duration-300'>{idx + 1}</div>
              )
            })
          }
          {
            [...Array(42 - data[dynamic_month].total_days - data[dynamic_month].skip_days)].map((value,index) => {
              return(
                <div className='h-24 shadow-lg rounded-lg shadow-amber-800 flex items-center justify-center text-2xl opacity-40'>
                    {index + 1}
                </div>

              )

              
            })
          }

        </div>
      </div>
    </>
  )
}

export default ContentWrapper