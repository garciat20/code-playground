import style from './nav.module.css'
import { useState } from 'react';

export default function Nav(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return(
    <>
        <div className={style.dropdown}>
            <div className={style.dropdownWidth}>
                <button className={style.dropdownBtn} onClick={toggleDropdown}>Select Language</button>
                {isDropdownOpen && (
                    <div id="myDropdown" className={style.dropdownContent}>
                        <a href="#">SQL (coming soon)</a>
                    </div>)}
            </div>
        </div>
    </>
    );
}


