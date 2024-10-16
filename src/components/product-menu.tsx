/* Menu component that becomes sticky */
import React, { useEffect, useRef, useState } from 'react';

const StickyMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const menuTop = menuRef.current?.offsetTop || 0;
      if (window.pageYOffset > menuTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`menu-container ${isSticky ? 'sticky' : ''}`}
      style={{
        padding: '10px',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: 'white',
      }}
    >
      <div className="flex justify-around">
        <div>CUP HANDLE</div>
        <div>OVAL KNOB</div>
        <div>ROUND KNOB</div>
        <div>PULL HANDLE</div>
        <div>BUTTON</div>
      </div>
    </div>
  );
};

export default StickyMenu;