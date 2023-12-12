import Footer from "../../Components/Footer";
import FooterSection from "../../Components/Layout/FooterSection";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import "./Listing.css";

const Listing = () => {
    return (
        <>
            <SubNavbar />
            <section className="container listing">
                <h3 className="listing__title">List PG</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 p-2 justify-center">
                        <div className="row listing__body">
                            <div className="col-lg-3 col-md-3 col-sm-3 p-0">
                                <ul className="nav nav-pills mb-3 d-flex flex-column detail__menu__list" id="pills-tab" role="tablist">
                                    <li className="nav-item lisitngTop " role="presentation">
                                        <button className="w-100 nav-link  list__link d-flex justify-content-start active" id="room-detail-tab" data-bs-toggle="pill" data-bs-target="#room-detail" type="button" role="tab" aria-controls="room-detail" aria-selected="true"><img src="/image/Rectangle 10.png" alt />Room Details</button></li>

                                    <li className="nav-item lisitngTop " role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="locality-detail-tab" data-bs-toggle="pill" data-bs-target="#locality-detail" type="button" role="tab" aria-controls="locality-detail" aria-selected="false"><img src="/image/Rectangle 86.png" alt />Locality details</button></li>

                                    <li className="nav-item lisitngTop " role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="pg-detail-tab" data-bs-toggle="pill" data-bs-target="#pg-detail" type="button" role="tab" aria-controls="pg-detail" aria-selected="false"><img src="/image/Rectangle 87.png" alt />PG details</button></li>

                                    <li className="nav-item lisitngTop " role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="amenities-tab" data-bs-toggle="pill" data-bs-target="#amenities" type="button" role="tab" aria-controls="amenities" aria-selected="false"><img src="/image/Rectangle 88.png" alt />Amenities</button></li>

                                    <li className="nav-item lisitngTop " role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="gallery-tab" data-bs-toggle="pill" data-bs-target="#amenities" type="button" role="tab" aria-controls="gallery" aria-selected="false"><img src="/image/Rectangle 89.png" alt />Gallery</button></li>

                                    <li className="nav-item lisitngTop " role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="schedule-tab" data-bs-toggle="pill" data-bs-target="#schedule" type="button" role="tab" aria-controls="amenities" aria-selected="false"><img src="/image/Rectangle 90.png" alt />Schedule</button></li>

                                </ul>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9  p-0">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="w-100 tab-pane listing__pg show container-fluid active" id="room-detail" role="tabpanel" aria-labelledby="room-detail-tab">
                                        <h3>Property Details</h3>
                                        <hr className="divide" />
                                        <div className="mb-3">
                                            <label htmlFor="pg-name" className="form-label form__label__listing">Owner Name </label><input type="text" className="form-control" id="pg-name" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="row justify-content-between">
                                            <div className="col-lg-6">
                                                <label  className="form__label__listing">Apartment Type </label>
                                                <div className="dropdown-center">
                                                    
                                                    <button className="dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown button<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>


                                            </div>
                                            <div className="col-lg-5">
                                                <div>
                                                    <label htmlFor="exampleInputEmail1" className="form-label form__label__listing">Email address</label>
                                                    <input type="email" className="form-control listing__email" placeholder="Eg. WinterSpring Rental, etc..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane listing__pg" id="locality-detail" role="tabpanel" aria-labelledby="locality-detail-tab">
                                        <h3>Tenant Space</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="pg-detail" role="tabpanel" aria-labelledby="pg-detail-tab">
                                        <h3>Shortlist</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="amenities" role="tabpanel" aria-labelledby="amenities-tab">
                                        <h3>My Payments</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                                        <h3>Change Password</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                                        <h3>Delete Listing</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >

                    <div className="listing__foot__btns d-flex">
                        <button className="listing__foot__btn-1">Back</button>
                        <button className="listing__foot__btn-2">Save & Continue</button>
                    </div>
                </div >

            </section >
            <FooterSection />
            <Footer />


        </>
    );
};

export default Listing;