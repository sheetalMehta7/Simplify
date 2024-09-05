import React from 'react'

const OuterHeader:React.FC<{toggleModal: () => void}> = ({ toggleModal }) => {
  return (
    <header className="bg-zinc-950 py-4 shadow-lg sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
      <div className="text-2xl font-bold text-violet-500">Simplify</div>
      {/* <ul className="hidden md:flex space-x-8 text-textPrimary">
        <li className="hover:text-accent transition-colors">Company</li>
        <li className="hover:text-accent transition-colors">Contact</li>
      </ul> */}
      <div className="hidden md:flex space-x-4">
        <button className="px-5 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition">Sign Up</button>
        <button className="px-8 py-2 border border-violet-500 text-violet-500 rounded-full hover:bg-violet-500 hover:text-white transition" onClick={toggleModal}>Login</button>
      </div>
      <button className="md:hidden text-textPrimary">☰</button>
    </nav>
  </header>
  )
}

export default OuterHeader