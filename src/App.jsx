import React from 'react'
import Section2 from './components/UI/Section2/Section2'
import Section1 from './components/UI/Section1/Section1'
import Section0 from './components/UI/Section0/Section0'
const App = () => {
  return (
    <div className='bg-gray-400 h-full w-full'>
      <Section0 />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App