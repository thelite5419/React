import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-150' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-10 '>
          <div className='flex flex-wrap justify-center bg-white rounded-3xl px- px-4'>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'red'}} onClick={()=> setColor('red')}>red</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'green'}} onClick={()=> setColor('green')}>green</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2' style={{backgroundColor: 'yellow'}} onClick={()=> setColor('yellow')}>yellow</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'blue'}} onClick={()=> setColor('blue')}>blue</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'black'}} onClick={()=> setColor('black')}>black</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'purple'}} onClick={()=> setColor('purple')}>purple</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'pink'}} onClick={()=> setColor('pink')}>pink</button>
          <button className='flex flex-wrap justify-center p-4 rounded-full m-2 text-white' style={{backgroundColor: 'gray'}} onClick={()=> setColor('gray')}>gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
