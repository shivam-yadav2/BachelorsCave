import Footer from "../../Components/Footer";
import FooterSection from "../../Components/Layout/FooterSection";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import "./Listing.css";

const Listing = () => {
    return (
        <>
            <SubNavbar />
            <section className="container-fluid listing">
                <h3 className="listing__title">List Property</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 p-2 justify-center">
                        <div className="row listing__body">
                            <div className="col-lg-2 col-md-3 col-sm-3 p-0">
                                <div className="row flex-column">


                                    <ul className=" col-lg-6 nav nav-pills mb-3 d-flex flex-column detail__menu__list" id="pills-tab" role="tablist" style={{ width: "100%" }}>
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
                                    <div className="col-lg-6"></div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-9  p-0">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="w-100 tab-pane listing__pg show container-fluid active" id="room-detail" role="tabpanel" aria-labelledby="room-detail-tab">
                                        <h3>Property Details</h3>
                                        <hr className="divide" />
                                        <div className="mb-3" >
                                            <label htmlFor="pg-name" className="form-label form__label__listing">Owner Name </label><input type="text" className="form-control" id="pg-name" placeholder="Enter Your Name" style={{ backgroundColor: "rgb(233 233 233)" }} />
                                        </div>
                                        <div className="row justify-content-between">
                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">Apartment Type </label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__listing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Apartment</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Independent House/Villa</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Gated community villa</a></li>
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
                                        <div className="row justify-content-between mt-3">
                                            <div className="col-lg-4 align-items-between">
                                                <label className="form__label__listing">BHK Type </label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn dropdown__btn__bhk" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__listing__bhk">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">1 BHK</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">2 BHK</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">3 BHK</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">4 BHK</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5 BHK</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5+ BHK</a></li>
                                                    </ul>
                                                </div>


                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <label htmlFor="exampleInputEmail2" className="form-label form__label__listing">Total Floor</label>
                                                    <input type="number" className="form-control listing__email" placeholder="Enter total floor" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                                </div>

                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <label htmlFor="exampleInputEmail3" className="form-label form__label__listing">Floor</label>
                                                    <input type="number" className="form-control listing__email" placeholder="Enter floor" id="exampleInputEmail3" aria-describedby="emailHelp" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row justify-content-between mt-3">
                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">Property age </label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__listing__property">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Less than a year</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">1 to 3 years</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5 to 10 years</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">More than 10 years</a></li>
                                                    </ul>
                                                </div>


                                            </div>
                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">Facing </label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul size="4" className="dropdown-menu dropdown__menu__listing__facing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">North</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">South</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">East</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">West</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">North-East</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">North-West</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">South-East</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">South-West</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Don't Know</a></li>
                                                    </ul>
                                                </div>


                                            </div>


                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="pg-name" className="form-label form__label__listing">Built up area </label><input type="number" className="form-control" id="pg-name" placeholder="area sqft." />
                                        </div>
                                    </div>

                                    <div className="tab-pane listing__pg" id="locality-detail" role="tabpanel" aria-labelledby="locality-detail-tab">
                                        <h3>Locality Details</h3>
                                        <hr className="divide" />
                                        <div className="row justify-content-between">
                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">City </label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__property ">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Chandigarh</a></li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-5">
                                                <div className="locality__location">
                                                    <label htmlFor="exampleInputEmail4" className="form-label form__label__listing">Locality</label>
                                                    <input type="email" className="form-control listing__email" placeholder="Enter location / society name" id="exampleInputEmail4" aria-describedby="emailHelp" />
                                                    <button><i class="fa-solid fa-location-crosshairs"></i> use current location</button>
                                                </div>


                                            </div>


                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="locality__location">
                                                    <label htmlFor="exampleInputEmail5" className="form-label form__label__listing">Landmark</label>
                                                    <input type="text" className="form-control listing__email" placeholder="Eg. Evergreen street" id="exampleInputEmail5" aria-describedby="emailHelp" />
                                                    <p>this feild is not needed but this makes listing faster and eaiser.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6"></div>
                                        </div>

                                        <div className="row justify-content-between">
                                            <div className="col-lg-6 locality__map__listing d-flex">
                                                <img src="/image/location.png" alt="" />
                                                <div className="ms-2">
                                                    <h3>Mark location on map.</h3>
                                                    <p>Drag the map marker.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905969579!2d76.68831226897285!3d30.732401982900683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1702486365823!5m2!1sen!2sin" width={987} height={398} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane listing__pg" id="pg-detail" role="tabpanel" aria-labelledby="pg-detail-tab">
                                        <h3>Rental details</h3>
                                        <hr className="divide" />

                                        <div className="row justify-content-start">
                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">Property available for </label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul size="4" className="dropdown-menu dropdown__menu__listing__facing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">North</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">South</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-between mt-4">
                                            <div className="col-lg-6">

                                                <label htmlFor="exampleInputEmail6" className="form-label form__label__listing">Expected Rent</label>
                                                <div className="d-flex listing__rent__box align-items-center">
                                                    <p>₹</p>
                                                    <input type="number" className="" placeholder="Eg. WinterSpring Rental, etc..." id="exampleInputEmail6" aria-describedby="emailHelp" />
                                                    <p>/month</p>
                                                </div>


                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="exampleInputEmail6" className="form-label form__label__listing">Expected Deposit</label>
                                                <div className="d-flex listing__rent__box align-items-center">
                                                    <p>₹</p>
                                                    <input type="number" className="" placeholder="Eg. WinterSpring Rental, etc..." id="exampleInputEmail6" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-between mt-4 ">
                                            <div className="form-check ms-3">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" style={{ width: "13px", height: "13px", marginTop: "5.5px" }} />
                                                <label style={{ fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", marginLeft: "5px" }} className="form-check-label" htmlFor="flexCheckDefault">
                                                    Rent Negotiable
                                                </label>
                                            </div>
                                        </div>

                                        <div className="row justify-content-start mt-4">
                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">Monthly Maintenance</label>
                                                <div className="dropdown-center drop__down">

                                                    <button className="dropdown__btn dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        select<i className="fa-solid fa-chevron-down" />
                                                    </button>
                                                    <ul size="4" className="dropdown-menu dropdown__menu__listing__facing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Maintenance Included</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Maintenance Extra</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-between mt-4">
                                            <div className="col-lg-6 align-items-between">
                                                <label htmlFor="exampleInputEmail6" className="form-label form__label__listing">Available from</label>
                                                <div className="d-flex listing__rent__box align-items-center">
                                                    <input type="date" className="" placeholder="Eg. WinterSpring Rental, etc..." id="exampleInputEmail6" aria-describedby="emailHelp" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 align-items-between">
                                                <label className="form__label__listing">Preferred tenants</label>
                                                <div className="dropdown-center drop__down" >

                                                    <button className="dropdown__btn dropdown__btn__img d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="/image/tnant4.png" style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            marginRight: "10px"
                                                        }} alt="" />select<i className="fa-solid fa-chevron-down" style={{
                                                            paddingLeft: "380px"
                                                        }} />
                                                    </button>
                                                    <ul size="4" className="dropdown-menu dropdown__menu__listing__facing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Doesn't matter</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Bachelors</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Students</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-between mt-4">
                                            <div className="col-lg-6 align-items-center">
                                                <label className="form__label__listing">Furnishing</label>
                                                <div className="dropdown-center drop__down" >

                                                    <button className="dropdown__btn dropdown__btn__img d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="/image/tnant5.png" style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            marginRight: "10px"
                                                        }} alt="" />select<i className="fa-solid fa-chevron-down" style={{
                                                            paddingLeft: "380px"
                                                        }} />
                                                    </button>
                                                    <ul size="4" className="dropdown-menu dropdown__menu__listing__facing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Fully-furnished</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Semi-furnished</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Unfurnished</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 align-items-center">
                                                <label className="form__label__listing">Parking</label>
                                                <div className="dropdown-center drop__down" >

                                                    <button className="dropdown__btn dropdown__btn__img d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="/image/tnant6.png" style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            marginRight: "10px"
                                                        }} alt="" />select<i className="fa-solid fa-chevron-down" style={{
                                                            paddingLeft: "380px"
                                                        }} />
                                                    </button>
                                                    <ul size="4" className="dropdown-menu dropdown__menu__listing__facing">
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Car</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Bike</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Both</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">None</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-12 col-lg-12">
                                            <label className="form__label__listing">Parking</label>
                                            <textarea name="description" id="description" placeholder="Write a few lines about your property something which is special and makes your property stand out. Please do not mention your contact details in any format." style={{
                                                height: "120px",
                                                width: "100%",
                                                borderRadius: "10px",
                                                border: "1px solid grey",
                                                padding: "10px"
                                            }}></textarea>
                                        </div>
                                    </div>

                                    <div className="tab-pane listing__pg" id="amenities" role="tabpanel" aria-labelledby="amenities-tab">
                                        <h3>Amenities</h3>
                                        <hr className="divide" />
                                        <div className="row justify-content-between mt-4">
                                            <div className="col-lg-4 align-items-center">
                                                <label className="form__label__listing">Bathroom(s)</label>
                                                <div className="dropdown-center drop__down" >

                                                    <button className="dropdown__btn dropdown__btn__img d-flex align-items-center" style={{
                                                        height: "50px"
                                                    }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="/image/bathroom.png" style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            margin: "0px 10px",

                                                        }} alt="" />select<i className="fa-solid fa-chevron-down" style={{
                                                            paddingLeft: "200px"
                                                        }} />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__listing__bath" >
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">1</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">2</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">3</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">4</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5+</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 align-items-center">
                                                <label className="form__label__listing">Balcony</label>
                                                <div className="dropdown-center drop__down" >

                                                    <button className="dropdown__btn dropdown__btn__img d-flex align-items-center" style={{
                                                        height: "50px"
                                                    }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="/image/download1.png" style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            margin: "0px 10px",
                                                        }} alt="" />select<i className="fa-solid fa-chevron-down" style={{
                                                            paddingLeft: "200px"
                                                        }} />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__listing__balcony" >
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">0</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">1</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">2</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">3</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">4</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">5+</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 align-items-center">
                                                <label className="form__label__listing">Water Supply</label>
                                                <div className="dropdown-center drop__down" >

                                                    <button className="dropdown__btn dropdown__btn__img d-flex align-items-center" style={{
                                                        height: "50px"
                                                    }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="/image/water-tap.png" style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            margin: "0px 10px",
                                                        }} alt="" />select<i className="fa-solid fa-chevron-down" style={{
                                                            paddingLeft: "200px"
                                                        }} />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown__menu__listing__water" >
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Corporation</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Borewell</a></li>
                                                        <li><a className="dropdown-item dropdown__item__listing" href="#">Both</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-between mt-4">
                                            <div className="col-lg-3 " style={{
                                                height: "50px"
                                            }}>
                                                <div className="amenities__box  d-flex justify-content-between">
                                                    <img src="/image/dumbbell.png" alt="" style={{
                                                        height: "32px",
                                                        widows: "32px"
                                                    }} />
                                                    <p>GYM</p>
                                                    <div className="btn-group d-flex flex-row" role="group" aria-label="Basic radio toggle button group" style={{
                                                        width:"110px"
                                                    }}>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-no-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-no-btn">No</label>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-yes-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-yes-btn">Yes</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3" style={{
                                                height: "50px"
                                            }}>
                                                <div className="amenities__box d-flex justify-content-between">
                                                <img src="/image/no-meat.png" alt="" style={{
                                                    height: "32px",
                                                    widows: "32px"
                                                }} />
                                                <p>GYM</p>
                                                <div className="btn-group d-flex flex-row" role="group" aria-label="Basic radio toggle button group" style={{
                                                        width:"110px"
                                                    }}>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-no-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-no-btn">No</label>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-yes-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-yes-btn">Yes</label>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-3" style={{
                                                height: "50px"
                                            }}>
                                                <div className="amenities__box d-flex justify-content-between">
                                                <img src="/image/guard.png" alt="" style={{
                                                    height: "32px",
                                                    widows: "32px"
                                                }} />
                                                <p>GYM</p>
                                                <div className="btn-group d-flex flex-row" role="group" aria-label="Basic radio toggle button group" style={{
                                                        width:"110px"
                                                    }}>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-no-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-no-btn">No</label>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-yes-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-yes-btn">Yes</label>
                                                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="col-lg-3" style={{
                                                height: "50px"
                                            }}>
                                                <div className="amenities__box d-flex justify-content-between">
                                                <img src="/image/smoking.png" alt="" style={{
                                                    height: "32px",
                                                    widows: "32px"
                                                }} />
                                                <p>GYM</p>
                                                <div className="btn-group d-flex flex-row" role="group" aria-label="Basic radio toggle button group" style={{
                                                        width:"110px"
                                                    }}>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-no-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-no-btn">No</label>
                                                        <input type="radio" className="btn-check" name="btnradio" id="amenities-yes-btn" autoComplete="off" />
                                                        <label className=" amenities__btn btn-outline-primary" htmlFor="amenities-yes-btn">Yes</label>
                                                    </div>
                                                    </div>
                                                
                                            </div>
                                        </div>
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