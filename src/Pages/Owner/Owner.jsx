import React from 'react';
// import { useState } from "react";
import './Owner.css'
import SubNavbar from '../../Components/Layout/Header/SubNavbar';
import Footer from "../../Components/Footer";


const Owner = () => {



    return (
        <>
            <SubNavbar />

            <section id="owner-sec">
                <form action="" >


                    <div className="container-fluid">
                        <div className="row owner__section">
                            <div className="col-lg-4 px-0">
                                <div className="owner__left d-flex flex-column align-items-end ">
                                    <div className="owner__left__box1">
                                        <h1>Why post through us?</h1>
                                        <p className='d-flex'><img src="/image/image 17.png" alt="" />Zero brokerage</p>
                                        <p className='d-flex'><img src="/image/image 18.png" alt="" />Faster Tenants</p>
                                        <p className='d-flex'><img src="/image/image 16.png" alt="" />Zero Paperwork</p>
                                    </div>

                                    <div className="owner__left__box2">
                                        <h1>Thousands of owner trust us! </h1>
                                        <p>I posted a property ad online on
                                            BachelorsCave. <br />
                                            its an efficient real estate wensite
                                            because despite my busy schedule
                                            they did a great job of contacting
                                            me at the right times. To keep me
                                            updated they sent mails & messages <br />
                                            They found a great tenant for my
                                            property as per my demands. <br />
                                            <span>...</span>
                                        </p>
                                        <h5>Anas <span>|</span> chandigarh</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 px-0">
                                <div className="owner__right">
                                    <h1>Let’s start with us!</h1>
                                    <hr className='divide' />
                                    <div className="row">
                                        <div className="col-lg-6 flex-column d-flex owner__form">
                                            <label htmlFor="owner-name">Owner Name</label>
                                            <input type="text" id='owner-name' placeholder='Enter your name' />
                                        </div>
                                        <div className="col-lg-6 flex-column d-flex owner__form">
                                            <label htmlFor="owner-number">Mobile number</label>
                                            <input type="number" id='owner-number' placeholder='Enter your number' />
                                        </div>
                                        <div className="col-lg-6 flex-column d-flex owner__form mt-4">
                                            <label htmlFor="owner-email">Email</label>
                                            <input type="email" id='owner-email' placeholder='Enter your email' />
                                        </div>
                                        <div className="col-lg-6 flex-column d-flex owner__form mt-4">
                                            <label htmlFor="owner-password">Mobile number</label>
                                            <input type="password" id='owner-password' placeholder='Enter your password' />
                                        </div>

                                        <div className="col-lg-12 mt-4 owner__gender">
                                            <label htmlFor="owner-gender">For</label>
                                            <select className="form-select" id='owner-gender' aria-label="Default select example">
                                                <option selected> select </option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="owner__property__type d-flex flex-column align-items-center justify-content-center">
                                        <h1>Property Type</h1>
                                        <div className='property__type__btn d-flex justify-content-between '>
                                            <input type='radio' id='property-btn1' name='property_buttons' hidden />
                                            <label htmlFor="property-btn1">Flats/Apartments</label>
                                            <input type='radio' id='property-btn2' name='property_buttons' hidden defaultChecked />
                                            <label htmlFor="property-btn2">PG/Hostel</label>
                                            <input type='radio' id='property-btn3' name='property_buttons' hidden />
                                            <label htmlFor="property-btn3">Residential House</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing__foot__btns d-flex">
                        <button type='submit' className="listing__foot__btn-2">Continue</button>
                    </div>
                </form>
            </section>
            <div className="container-fluid px-0 ">
                <div className="owner__card__sec d-flex justify-content-center align-items-center flex-column pb-4">
                    <h1>How it works?</h1>
                    <div className='d-flex justify-content-between pb-4'>
                        <div className="owner__card">
                            <div className="d-flex align-items-start">
                                <img src="/image/Component 13.png" alt="" />
                                <div className="d-flex flex-column owner__card__content">
                                    <h3>Share your Property
                                        Details</h3>
                                    <p>Enter all details like locality
                                        name, amenities etc. along with
                                        uploading Photos</p>
                                </div>
                            </div>
                        </div>
                        <div className="owner__card">
                            <div className="d-flex align-items-start">
                                <img src="/image/Component 13.png" alt="" />
                                <div className="d-flex flex-column owner__card__content">
                                    <h3>Share your Property
                                        Details</h3>
                                    <p>Enter all details like locality
                                        name, amenities etc. along with
                                        uploading Photos</p>
                                </div>
                            </div>
                        </div>
                        <div className="owner__card">
                            <div className="d-flex align-items-start">
                                <img src="/image/Component 13.png" alt="" />
                                <div className="d-flex flex-column owner__card__content">
                                    <h3>Share your Property
                                        Details</h3>
                                    <p>Enter all details like locality
                                        name, amenities etc. along with
                                        uploading Photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Owner