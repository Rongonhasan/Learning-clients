import React from 'react';
import { Button,  } from 'react-daisyui';



const Header = () => {
    return (
      <div>
     
 
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        
        Designer
      </div>
      
     

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in `}>
      
        <Button>
          Get Started
        </Button>
      </ul>
      </div>
    </div>


      </div>
    );
};

export default Header;