import React from 'react'


const Footer = () => {
    return (
      <footer className="bg-gray-800 py-4 text-white sticky top-[100vh]">
        <div className="container mx-auto flex flex-col sm:flex-row items-center px-4">
          <p className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} smartive AG
          </p>
        
        </div>
      </footer>
    )
  }
  
  export default Footer