import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className="flex justify-center space-x-4">
      <p className="text-4xl font-bold mt-4">Vite + <span className='bg-slate-500	'> React </span> </p>
      </div>
    </div>
  )
}

export default App