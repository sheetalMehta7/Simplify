import React from 'react'
import OuterHeader from '../layout/OuterHeader'

const Home = () => {
  return (
    <>
      {/* <OuterHeader /> */}
      {/* <section className="bg-primary text-textPrimary py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Managing Your Projects Just Got a Lot Easier
          </h1>
          <p className="text-textSecondary text-lg md:text-xl mb-8">
            Try our reliable task manager today and experience the difference it can make for your team.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-accent text-white px-6 py-3 rounded">Get Started</button>
            <button className="text-accent border border-accent px-6 py-3 rounded">Talk to Sales</button>
          </div>
          <img src="/path-to-your-banner-image.png" alt="Banner Image" className="mt-12 max-w-full mx-auto shadow-lg rounded-lg" />
        </div>
      </section>



      <section className="bg-secondary text-textPrimary py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Manage Your Task Management Process
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3 bg-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-textSecondary">Brief description of Feature One.</p>
            </div>
            <div className="w-full md:w-1/3 bg-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-textSecondary">Brief description of Feature Two.</p>
            </div>
            <div className="w-full md:w-1/3 bg-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
              <p className="text-textSecondary">Brief description of Feature Three.</p>
            </div>
          </div>
        </div>
      </section> */}


      <header className="bg-primary py-4 shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="text-2xl font-bold text-accent">Taskeye</div>
          <ul className="hidden md:flex space-x-8 text-textPrimary">
            <li className="hover:text-accent transition-colors">Features</li>
            <li className="hover:text-accent transition-colors">Resources</li>
            <li className="hover:text-accent transition-colors">Company</li>
            <li className="hover:text-accent transition-colors">Contact</li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <button className="px-5 py-2 bg-gradient-radial from-accent to-blue-500 text-white rounded-full hover:scale-105 transform transition">Get Started</button>
            <button className="px-5 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition">Talk to Sales</button>
          </div>
          <button className="md:hidden text-textPrimary">☰</button>
        </nav>
      </header>


      <section className="bg-gradient-radial from-primary via-secondary to-primary py-32">
        <div className="max-w-5xl mx-auto text-center text-textPrimary px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in mb-6">
            Elevate Your Project Management
          </h1>
          <p className="text-lg md:text-xl text-textSecondary mb-12">
            Experience a seamless and powerful task management tool designed for modern teams. Simplify, prioritize, and conquer your tasks effortlessly.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-accent text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition">Start Now</button>
            <button className="px-8 py-3 bg-transparent border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transform hover:scale-105 transition">Learn More</button>
          </div>
          <div className="mt-16">
            <img src="/path-to-your-banner-image.png" alt="Product Preview" className="mx-auto shadow-lg rounded-lg animate-fade-in" />
          </div>
        </div>
      </section>


      <section className="bg-primary py-16 text-textPrimary">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12">Why Choose Taskeye?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H9l4-4 4 4h-3v4zM4 6h16M4 10h16M10 14h6"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Effortless Task Management</h3>
              <p className="text-textSecondary">Easily create, manage, and track tasks with our intuitive interface.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h4l3.89 8.26a1 1 0 01-.22 1.05L10 18h4l-1.67-3.35A1 1 0 0111 13h-1l3-6H7l-3 6z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Customizable Workflows</h3>
              <p className="text-textSecondary">Tailor workflows to fit your team’s needs, enhancing productivity.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6h2V7h2v4h2v6m-6 4h6v-2H9v2z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Real-time Collaboration</h3>
              <p className="text-textSecondary">Collaborate with your team in real-time with instant updates.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-secondary py-16 text-textPrimary">
  <div className="max-w-7xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="bg-primary p-6 rounded-lg shadow-lg">
        <p className="text-xl">“Taskeye has revolutionized our project management process. We’re now more efficient than ever!”</p>
        <p className="mt-4 font-semibold">- Sarah, Product Manager</p>
      </div>
      <div className="bg-primary p-6 rounded-lg shadow-lg">
        <p className="text-xl">“The real-time collaboration feature has been a game changer for our remote team.”</p>
        <p className="mt-4 font-semibold">- Alex, Team Lead</p>
      </div>
    </div>
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-4">Trusted by Leading Companies</h3>
      <div className="flex justify-center space-x-8">
        <img src="/path-to-google-logo.png" alt="Google" className="h-12" />
        <img src="/path-to-microsoft-logo.png" alt="Microsoft" className="h-12" />
        <img src="/path-to-other-logo.png" alt="Other Company" className="h-12" />
      </div>
    </div>
  </div>
</section>



<footer className="bg-primary py-8 text-textSecondary">
  <div className="max-w-7xl mx-auto text-center">
    <p>&copy; 2024 Taskeye. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="hover:text-textPrimary transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-textPrimary transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-textPrimary transition-colors">Contact Us</a>
    </div>
  </div>
</footer>



    </>
  )
}

export default Home