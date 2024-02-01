import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png'; 

const Headers = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="ml-3 text-xl">
              <Image
              src={logo}
              alt='image'
              height={50}
              width={50}/>
            </div>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/#who_we_are">
            <span  className="mr-5 hover:text-gray-500"> Who We Are</span>
          </Link>
          <Link href="/directors_Panel" className="mr-5 hover:text-gray-500">
          Directors Panel
        </Link>
         <Link href="/#team" className="mr-5 hover:text-gray-500">
           Our Team
          </Link>
          <Link href="/#contact" className="mr-5 hover:text-gray-500">
           Contact Us
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Headers;
