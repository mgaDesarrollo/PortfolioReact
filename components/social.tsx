
import React from 'react'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'; 



export default function social() {
  return (
    <div>
<ul className="flex space-x-4 md:space-x-8"> 
      <li>
        <a href="https://github.com/mgaDesarrollo" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/your-linkedin-profile-url" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-xl" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl" />
        </a>
      </li>
    
    </ul>
    </div>
  )
}
