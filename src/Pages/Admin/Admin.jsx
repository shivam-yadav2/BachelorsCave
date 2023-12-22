import React from 'react';
// import { useState } from "react";
import './Admin.css'
import SubNavbar from '../../Components/Layout/Header/SubNavbar';


const Admin = () => {


    return (
        <>
            <SubNavbar />

            <section id="owner-space" className='container-fluid '>
                <h1>Owner Space</h1>
                <div className="row owner__space">
                    <div className="col-lg-8">
                        <div className="owner__space__card d-flex justify-content-between align-items-center w-100">
                            <div className="owner__card__left">
                                <h4>Hi Anas, welcome to Bachelor’sCave</h4>
                                <p>Follow our guide to get started on the platform. Online booking, our guaranteed, last-minute cancelling, everything is explained there!</p>
                                <button>Discover our Guide</button>
                            </div>
                            <div className="owner__card__mid"></div>
                            <div className="owner__card__right d-flex flex-column justify-content-center align-items-center">
                                <img src="/image/Vector (12).png" alt="" />
                                <h5>Need Help ?</h5>
                                <p>Send us Message</p>
                            </div>
                            <div className="owner__card__right"></div>
                        </div>
                        <div className="admin__pills">
                            <ul className="nav nav-pills mb-4 admin__pill__menu d-flex justify-content-between" id="admin-pills" role="tablist">
                                <li className="nav-item  " role="adminData">
                                    <button className="w-100 nav-link nav-Link  d-flex justify-content-start active" id="manage-tab" data-bs-toggle="pill" data-bs-target="#manage" type="button" role="tab" aria-controls="manage" aria-selected="true">Manage Properties</button></li>

                                <li className="nav-item  " role="adminData">
                                    <button className="nav-link nav-Link  d-flex justify-content-start" id="performance-tab" data-bs-toggle="pill" data-bs-target="#performance" type="button" role="tab" aria-controls="performance" aria-selected="false">Property Performance</button></li>

                                <li className="nav-item  " role="adminData">
                                    <button className="nav-link nav-Link  d-flex justify-content-start" id="response-tab" data-bs-toggle="pill" data-bs-target="#response" type="button" role="tab" aria-controls="response" aria-selected="false">Response</button></li>
                            </ul>

                            <div className="tab-content" id="admin-pillsContent">
                                <div className='w-100 tab-pane  show container active' id="manage" role="tabpanel" aria-labelledby="manage-tab">
                                    <div className="row mb-4">
                                        <div className="col-lg-3 position-relative">
                                            <div className="dropdown-center manage__drop w-100">
                                                <a className="btn  w-100  dropdown-toggle d-flex align-items-center justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    All
                                                    <img src="/image/Vector (13).png" alt="" style={{
                                                        width: "11px",
                                                        height: "14px"
                                                    }} />
                                                </a>

                                                <ul className="dropdown-menu position-absolute w-100 p-0 pt-1">
                                                    <li><a className="dropdown-item" href="#">Action1</a></li>
                                                    <li><a className="dropdown-item" href="#">Action2</a></li>
                                                    <li><a className="dropdown-item" href="#">Action3</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="col-lg-5 position-relative">
                                            <div className="dropdown-center manage__drop w-100">
                                                <a className="btn  w-100  dropdown-toggle d-flex align-items-center justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Search Properties
                                                    <img src="/image/Vector (13).png" alt="" style={{
                                                        width: "11px",
                                                        height: "14px"
                                                    }} />
                                                </a>

                                                <ul className="dropdown-menu position-absolute w-100 p-0 pt-1">
                                                    <li><a className="dropdown-item" href="#">Action1</a></li>
                                                    <li><a className="dropdown-item" href="#">Action2</a></li>
                                                    <li><a className="dropdown-item" href="#">Action3</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row" style={{
                                        marginTop: "50px"
                                    }}>
                                        <div className="col-lg-12">
                                            <div className="card mb-3 w-100 manage__pill__card" >
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src="/cardImage/cardImage.png" className="" style={{
                                                            width: "269px",
                                                            height: "185px"

                                                        }} />
                                                    </div>
                                                    <div className="col-md-7 p-3">
                                                        <div className="card__ryt__top d-flex justify-content-between align-items-start">
                                                            <div className='card__ryt__top__content d-flex'>
                                                                <h5>Basic Plan</h5>
                                                                <div className="vertical__rule"></div>
                                                                <p>Valid Till: Nov 27, 2023</p>
                                                            </div>
                                                            <img src="/image/Group 4.png" alt="" style={{
                                                                width: "4px",
                                                                height: "19.2px",
                                                                cursor: "pointer"
                                                            }} />
                                                        </div>
                                                        <div className="card__ryt__bottom row">
                                                            <div className="col-lg-8">
                                                                <div className="ryt-btm-left">
                                                                    <h3 className='mb-0'>2 BHK Flat in chandigarh</h3>
                                                                    <p>1598, 23B, Sector 23, Chandigarh, 160023, India</p>
                                                                    <h3 className='mb-3'>₹  6,999</h3>
                                                                    <span>Edit</span><span className='ps-4 '>Deactivate</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="ryt-btm-ryt">
                                                                    <div className='btm-ryt-content d-flex flex-column justify-content-between align-items-center'>
                                                                        <p>Available from</p>
                                                                        <div className="line"></div>
                                                                        <h4>01/10/2023 <i class="fa-solid fa-pencil"></i></h4>
                                                                    </div>
                                                                    <button>Upgrade</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-5">
                                            <div className="card mb-3 w-100 manage__pill__card" >
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src="/cardImage/cardImage.png" className="" style={{
                                                            width: "269px",
                                                            height: "185px"

                                                        }} />
                                                    </div>
                                                    <div className="col-md-7 p-3">
                                                        <div className="card__ryt__top d-flex justify-content-between align-items-start">
                                                            <div className='card__ryt__top__content d-flex'>
                                                                <h5>Basic Plan</h5>
                                                                <div className="vertical__rule"></div>
                                                                <p>Valid Till: Nov 27, 2023</p>
                                                            </div>
                                                            <img src="/image/Group 4.png" alt="" style={{
                                                                width: "4px",
                                                                height: "19.2px",
                                                                cursor: "pointer"
                                                            }} />
                                                        </div>
                                                        <div className="card__ryt__bottom row">
                                                            <div className="col-lg-8">
                                                                <div className="ryt-btm-left">
                                                                    <h3 className='mb-0'>2 BHK Flat in chandigarh</h3>
                                                                    <p>1598, 23B, Sector 23, Chandigarh, 160023, India</p>
                                                                    <h3 className='mb-3'>₹  6,999</h3>
                                                                    <span>Edit</span><span className='ps-4 '>Deactivate</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="ryt-btm-ryt">
                                                                    <div className='btm-ryt-content d-flex flex-column justify-content-between align-items-center'>
                                                                        <p>Available from</p>
                                                                        <div className="line"></div>
                                                                        <h4>01/10/2023 <i class="fa-solid fa-pencil"></i></h4>
                                                                    </div>
                                                                    <button>Upgrade</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-100 tab-pane  show container active' id="performance" role="tabpanel" aria-labelledby="performance-tab">
                                    yadav
                                </div>

                                <div className='w-100 tab-pane  show container active' id="response" role="tabpanel" aria-labelledby="response-tab">
                                    developer
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </section>
        </>
    )
}

export default Admin