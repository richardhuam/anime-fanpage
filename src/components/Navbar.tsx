import React from 'react';

import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="w-full z-navbar sticky top-0 shadow-navbar bg-white flex items-center justify-center h-16 md:h-20">
      <Logo />
    </div>
  );
};

export default Navbar;
