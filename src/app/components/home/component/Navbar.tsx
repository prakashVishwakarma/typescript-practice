'use client'
import React, { useRef } from 'react'
import style from './navbar.module.css'



const Navbar: React.FC = () => {
    const NavbarboxRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        const box = NavbarboxRef.current;
        // Apply initial styles
        // box.style.transition = 'transform 0.3s ease-in-out';
        // box.style.transform = sidebarToggle && 'translateX(70%)';
        // box.style.right = !sidebarToggle && '-21%';
        // box.style.display = sidebarToggle ? 'block' : 'none';

        // // Delay style changes to ensure initial styles are applied before transition
        // setTimeout(() => {
        //     box.style.transition = 'transform 0.3s ease-out';
        //     box.style.transform = sidebarToggle ? 'translateX(-0%)' : 'translateX(70%)';
        //     box.style.right = sidebarToggle ? '0%' : '-21%';
        // }, 200);
        // setSidebarToggle(!sidebarToggle)
    };

    return (<>
         <div ref={NavbarboxRef} className={style.Navbar_container}>
        <div className={style.Navbar_logo}>
          {/* <img src={logo} alt="" /> */}
        </div>
        <div onClick={handleToggle} className={style.Navbar_hamburger_icon}>
          <h6>HI DIVYA</h6>
          {/* <img src={hamburger_icon} alt="" /> */}
        </div>
      </div>
      <div id="Navbar_sidebar_id" className={style.Navbar_sidebar}>
        <div>
          <div>
            {/* <img src={'logo'} alt="" /> */}
          </div>
          <div className={style.Navbar_inputfield}>
            <div>
              <input type="text" placeholder="Events" className={style.white_text} name="Events" id="" />
              <input type="text" placeholder="Create new event" name="Create new event" id="" />
              <input type="text" placeholder="Upgrade" name="Upgrade" id="" />
              <input type="text" placeholder="View Profile" name="View Profile" id="" />
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Navbar
