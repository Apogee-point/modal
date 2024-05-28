import { useState } from 'react'
import Modal from './components/Modal';
import './App.css'
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="border border-neutral w-40 h-14 rounded-lg shadow-neon text-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103" 
      onClick={() => setOpen(true)}>Enter Details</button>
      <Modal open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}

export default App


