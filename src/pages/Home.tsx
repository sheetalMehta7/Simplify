import React from 'react'
import OuterHeader from '../layout/OuterHeader'
import banngerImg from '../assets/banner-img.png'

const Home = () => {
  return (
    <div className='overflow-x-hidden w-screen'>
      <OuterHeader />
      <section className="bg-zinc-950 py-20">
        <div className="max-w-5xl mx-auto text-center text-textPrimary px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold animate-fade-in mb-10 heading-border text-violet-100">
            Simplify Task Management for You and Your Team.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-12">
            Organize tasks, set deadlines, and collaborate instantly.
            Track progress, share updates, and boost productivity with ease.
            Stay focused, get reminders, and simplify work.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transform hover:scale-105 transition">Sign up for free</button>
            <button className="px-8 py-3 bg-transparent border-2 border-violet-500 text-violet-500 rounded-full hover:bg-violet-500 hover:text-white transform hover:scale-105 transition">Login</button>
          </div>
          <div className="mt-16 border rounded-2xl overflow-hidden p-8 border-violet-500 hover:bg-purple-950 transition">
            <img src={banngerImg} alt="Product Preview" className="mx-auto shadow-lg rounded-lg animate-fade-in" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home