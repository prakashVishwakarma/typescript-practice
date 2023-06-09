'use client'
import React, { useRef, useState } from 'react'
import style from './Eventlist.module.css'
import filter_icon from '../../assets/img/filter_icon.jpg'
import EventlistInfo from './EventlistInfo'
// import EventlistInfo from '../EventlistInfo/EventlistInfo'

const Eventlist: React.FC = () => {

    const [filterToggle, setFilterToggle] = useState<boolean>(true)
    const NavbarboxRefFilter = useRef<null>(null);


    const handleToggle = () => {
        const box = NavbarboxRefFilter.current;
        // Apply initial styles
        // box.style.transition = 'transform 0.3s ease-in-out';
        // box.style.transform = filterToggle && 'translateX(70%)' ;
        // box.style.right = !filterToggle && '-21%' ;
        // box.style.display = filterToggle ?  'block':'none' ;

        // box.style.transition = 'transform 0.3s ease-in-out';
        // box.style.transform = filterToggle ? 'translateX(70%)' : 'translateX(-0%)';
        // box.style.right = filterToggle ? '-70%' : '0%';
        // box.style.display = filterToggle ? 'none' : 'block';

        // Delay style changes to ensure initial styles are applied before transition
        // setTimeout(() => {
        //     box.style.transition = 'transform 0.3s ease-out';
        //     box.style.transform = filterToggle ? 'translateX(-0%)' : 'translateX(70%)';
        //     box.style.right = filterToggle ? '0%' : '-21%';

        //     // box.style.transition = 'transform 0.3s ease-in-out';
        //     // box.style.transform = filterToggle ? 'translateX(-0%)' : 'translateX(70%)';
        //     // box.style.right = filterToggle ? '0%' : '-70%';
        // }, 200);
        // setFilterToggle(!filterToggle)
    };

    return (<>
        <div className={style.Eventlist_container}>
            <div className={style.Eventlist_container_left}>
                <h4>Events list</h4>
            </div>

            <div onClick={() => handleToggle()} className={style.Eventlist_container_right}>
                {/* <img src={filter_icon} alt="" /> */}
                <h4>Filter</h4>
            </div>
        </div>
        <hr />
        {/* {
            filterToggle && */}
        <div ref={NavbarboxRefFilter} className={style.Eventlist_filter_sidebar}>
            <div className={style.Eventlist_filter_sidebar_fluid}>
                <h3>Filter</h3>
                <p>Models</p>
                <div className={style.Eventlist_input_type_checkbox}>
                    <input type="checkbox" name="" id="" />
                    <p>online</p>
                </div>
                <div className={style.Eventlist_input_type_checkbox}>
                    <input type="checkbox" name="" id="" />
                    <p>In-person</p>
                </div>
                <div className={style.Eventlist_input_type_checkbox}>
                    <input type="checkbox" name="" id="" />
                    <p>Hybrid</p>
                </div>

                <p>Cateogary</p>

                <select name="cars" id="cars">
                    <option value="volvo">Select a category </option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <p >Select a date</p>

                <select name="cars" id="cars">
                    <option value="volvo">Select a date</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <p>SpeakerOre</p>
                <div className={style.Eventlist_input_type_checkbox}>
                    <input type="checkbox" name="" id="" />
                    <p className={style.p}>SpeakerOre Exclusive</p>
                </div>
            </div>
        </div>
        {/* } */}

        {/* use map funtion here */}
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
        <EventlistInfo />
    </>
    )
}

export default Eventlist
