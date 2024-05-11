import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style.css";
import { Link } from 'react-router-dom';
export default function Sidebar() {
    const [active,setActive] = useState();
  return (
    <div>
        <div className='sidebar d-flex justif-content-between felx-column bg-dark text-white py-3 ps-3 pe-5 '>
            <div>
                <Link className='p-3' to={"/administrative/dashboard"}>
                    <i className='bi bi-user fs-4'></i>
                    <img src="/Images/logo-white.svg"/>
                </Link>
                <hr className='text-white mt-2'/>
                <ul className='nav nav-pills flex-column mt-2 '>
                    <li className={ active===1?' active nav-item p-2':'nav-item p-2'} onClick={()=>setActive(1)}>
                        <Link to={'/administrative/dashboard'}>
                            <i className='bi bi-speedometer2 me-3 fs-4'></i>
                            <span><strong>Dashboard</strong></span>
                        </Link>
                    </li>
                    <li className={ active===2?' active nav-item p-2':'nav-item p-2'}  onClick={()=>setActive(2)}>
                        <Link to={"/administrative/employees"}  className='p-1'>
                            <i className='bi bi-people me-3  fs-4'></i>
                            <span><strong>Employées</strong></span>
                        </Link>
                    </li>
                    <li className={ active===3?' active nav-item p-2':'nav-item p-2'}  onClick={()=>setActive(3)}>
                        <Link to='/administrative/absences'  className='p-1'>
                            <i className='bi bi-calendar-minus me-3  fs-4'></i>
                            <span><strong>Absences</strong></span>
                        </Link>
                    </li>
                    <li className={ active===4?' active nav-item p-2':'nav-item p-2'}  onClick={()=>setActive(4)}>
                        <Link to='/administrative/conges'  className='p-1'>
                            <i className='bi bi-calendar3 me-3  fs-4'></i>
                            <span><strong>Conges</strong></span>
                        </Link>
                    </li>
                    <li className={ active===5?' active nav-item p-2':'nav-item p-2'}  onClick={()=>setActive(5)}>
                        <Link to='/administrative/events'  className='p-1'>
                            <i className='bi bi-calendar-plus fs-4 me-3'></i>
                            <span><strong>Événements</strong></span>
                        </Link>
                    </li>

                </ul>
            </div>

        </div>

    </div>
  )
}
