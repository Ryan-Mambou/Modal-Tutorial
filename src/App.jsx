import { useState } from 'react'
import Modal from './Components/Modal'
import './App.css'

function App() {
  //State to open and close modal
  const [modalOpen, setModalOpen] = useState(false)

  //Function to toggle state for opening and closing modal
  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  console.log(modalOpen)

  return (
    <div className="App">
      <h1>Modal Tutorial with React Portals 🚀</h1>
      <button onClick={handleModal} style={{background: '#FF9300', fontWeight: '600', outline: 'none'}}>Open Modal</button>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)}></Modal>}
    </div>
  )
}

export default App
