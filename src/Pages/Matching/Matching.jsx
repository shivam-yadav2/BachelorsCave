import React from 'react'
import './Matching.css'
import SubNavbar from '../../Components/Layout/Header/SubNavbar';

function Matching() {
    return (
        <>
            <SubNavbar />
            <div className="row matching">
                <div className="col-lg-7">
                    <div className="matching__sec mb-5">
                        <h2>
                            <span>Hi Anas,</span><br />Connect with <span> 35 Matching Tenant</span> for your 2 BHK Apartment in kharar, punjab
                        </h2>
                        <div className="row">
                            <div className="col-lg-12 mt-4">
                                <div className="matching__cards">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="matching__cards__lft">
                                                <h5>Matching Tenant</h5>
                                                <div className="matching__card__user d-flex align-items-center">
                                                    <img src="/image/account-circle.png" alt="" />
                                                    <div className="row ms-2">
                                                        <div className="col-lg-12 matching__user__name">
                                                            <h4>James (Boy)</h4>
                                                        </div>
                                                        <div className="col-lg-6 matching__user__txt1">Budget:</div>
                                                        <div className="col-lg-6 matching__user__txt2">₹ 7,200 - ₹ 8,900</div>
                                                        <div className="col-lg-6 matching__user__txt1">Teant is looking in:</div>
                                                        <div className="col-lg-6 matching__user__txt2">Kharar, Punjab </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="matching__cards__ryt d-flex flex-column justify-content-between align-items-end">
                                                <h3>Last active on: <span>01/10/2023</span></h3>
                                                <div className="matching__card__ryt__btn">
                                                    <button>Good Match</button>
                                                    <button>View Contact</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <div className="matching__cards">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="matching__cards__lft">
                                                <h5>Matching Tenant</h5>
                                                <div className="matching__card__user d-flex align-items-center">
                                                    <img src="/image/account-circle.png" alt="" />
                                                    <div className="row ms-2">
                                                        <div className="col-lg-12 matching__user__name">
                                                            <h4>Rachel (Girl)</h4>
                                                        </div>
                                                        <div className="col-lg-6 matching__user__txt1">Budget:</div>
                                                        <div className="col-lg-6 matching__user__txt2">₹ 9,200 - ₹ 8,900</div>
                                                        <div className="col-lg-6 matching__user__txt1">Teant is looking in:</div>
                                                        <div className="col-lg-6 matching__user__txt2">Kharar, Punjab </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="matching__cards__ryt d-flex flex-column justify-content-between align-items-end">
                                                <h3>Last active on: <span>01/10/2023</span></h3>
                                                <div className="matching__card__ryt__btn">
                                                    <button>Good Match</button>
                                                    <button>View Contact</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <div className="matching__cards">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="matching__cards__lft">
                                                <h5>Matching Tenant</h5>
                                                <div className="matching__card__user d-flex align-items-center">
                                                    <img src="/image/account-circle.png" alt="" />
                                                    <div className="row ms-2">
                                                        <div className="col-lg-12 matching__user__name">
                                                            <h4>Harry (Boy)</h4>
                                                        </div>
                                                        <div className="col-lg-6 matching__user__txt1">Budget:</div>
                                                        <div className="col-lg-6 matching__user__txt2">₹ 7,200 - ₹ 8,900</div>
                                                        <div className="col-lg-6 matching__user__txt1">Teant is looking in:</div>
                                                        <div className="col-lg-6 matching__user__txt2">Kharar, Punjab </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="matching__cards__ryt d-flex flex-column justify-content-between align-items-end">
                                                <h3>Last active on: <span>01/10/2023</span></h3>
                                                <div className="matching__card__ryt__btn">
                                                    <button>Good Match</button>
                                                    <button>View Contact</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-12 mt-4 ">
                                <div className="matching__show__more__btn w-100  d-flex align-items-center justify-content-center">
                                    <button>Show More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Matching;