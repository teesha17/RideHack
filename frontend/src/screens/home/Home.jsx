import React from 'react'
import './Home.css'
import Navabr from '../../components/Navbar/Navabr'
import { FaBuilding } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCashRegister } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <Navabr/>
    <div>
    <div class="home-container">
    <h1 class="display-5 fw-bold">Save <span>Money</span>. Save <span>Time</span></h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">India's largest tax and financial services software platform</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
        <button type="button" class="btn btn-outline-primary btn-lg px-4">Learn More</button>
      </div>
    </div>
  </div>
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 px-5">
      <div class="feature col text-center text-body-secondary">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
          <FaBuilding/>
        </div>
        <h3 class="fs-4 text-body-emphasis">Featured title</h3>
        <p className='text-body-secondary'>A new model of ITC management that helps businesses with high purchase complexity to increase efficiency of their working capital</p>
        <a href="#" class="icon-link">
          Call to action
          <FaArrowRight/>
        </a>
      </div>
      <div class="feature col text-center">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3 text-body-secondary">
          <IoPerson/>
        </div>
        <h3 class="fs-4 text-body-emphasis">Featured title</h3>
        <p className='text-body-secondary'>A new model of ITC management that helps businesses with high purchase complexity to increase efficiency of their working capital</p>
        <a href="#" class="icon-link">
          Call to action
          <FaArrowRight/>
        </a>
      </div>
      <div class="feature col text-center">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3 text-body-secondary">
          <FaCashRegister/>
        </div>
        <h3 class="fs-4 text-body-emphasis">Featured title</h3>
        <p className='text-body-secondary'>A new model of ITC management that helps businesses with high purchase complexity to increase efficiency of their working capital</p>
        <a href="#" class="icon-link">
          Call to action
          <FaArrowRight/>
        </a>
      </div>
    </div>
    </div>
    </>
  )
}