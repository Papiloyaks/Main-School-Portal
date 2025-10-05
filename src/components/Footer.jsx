import React from 'react'
import { useLocation } from 'react-router-dom'
// import twitter from '../Images/twitter.svg'


// let myFooter = {
//   height: '10vh'
// }
const Footer = () => {
  const location = useLocation()
  const hiddenRoutes = ['/congrat','/about'];
  const isHidden = hiddenRoutes.includes(location.pathname);  

  return isHidden ? null :  (
    <> 
<div className=" bg-cyan-800 container-fluid px-4 shadow-2xl py-10">
  <footer className=" flex justify-between border-top">
    <div className="mb-3">
      <a href="/" className="flex items-center mb-3 link-body-emphasis decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>
      <p className="text-body-secondary">&copy; 2023</p>
    <div className="mb-3"></div>
    </div>

    <div className="mb-3">
      <h5>Section</h5>
      <ul>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="mb-3">
      <h5>Section</h5>
      <ul>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="mb-3">
      <h5>Section</h5>
      <ul>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer