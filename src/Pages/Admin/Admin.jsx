import React from 'react';
// import { useState } from "react";
import './Admin.css'
import SubNavbar from '../../Components/Layout/Header/SubNavbar';


const Admin = ()=>{


    return (
        <>
        <SubNavbar/>    

        <section id="owner-space" className='container-fluid '>
            <h1>Owner Space</h1>
            <div className="row owner__space">
                <div className="col-lg-8">
                    <div className="owner__space__card w-100">
                        <div className="owner__card__left">
                            
                        </div>
                        <div className="owner__card__right"></div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </section>
        </>
    )
}

export default Admin