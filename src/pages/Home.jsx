import React from 'react';
import '../assets/styles/home.css'

class Home extends React.Component {

    render() {
        return (
            <>
                <div className="page-title">
                    <h2 className="title-heading">Simplify your online shipping for free this month</h2>
                    <p className="title-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor, suscipit harum
                        repudiandae illum repellat cum
                        fugiat libero magnam, nemo, vero iure quae sit illo ad! Amet sapiente aspernatur libero!</p>
                </div>
                <div class="blog-section">
                    <div class="section-title-container">
                        <h3>News and Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas laborum itaque vel eos a enim
                            tempore, nostrum at eaque rerum. Labore ex dolore saepe quod id qui cumque impedit.</p>
                        <a href="#">See All</a>
                    </div>
                </div>
                <div class="contact-section" id="contact">
                    <div class="section-title-container">
                        <h3>Contact Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas laborum itaque vel eos a enim
                            tempore, nostrum at eaque rerum. Labore ex dolore saepe quod id qui cumque impedit.</p>
                    </div>
                    <div class="contact-items-container">
                        <div class="contact-item">
                            <h6>Addres</h6>
                            <p>Bandung city</p>
                        </div>

                        <div class="contact-item">
                            <h6>Email</h6>
                            <p>user@mail.com</p>
                        </div>

                        <div class="contact-item">
                            <h6>Phone Number</h6>
                            <p>021 1234567</p>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="footer-item">
                        <h6>Product</h6>
                        <a href="#">Download</a>
                        <a href="#">Pricing</a>
                        <a href="#">Location</a>
                    </div>
                    <div class="footer-item">
                        <h6>Engage</h6>
                        <a href="#">FAQ</a>
                        <a href="#">Tutorial</a>
                        <a href="#">About Us</a>
                    </div>
                    <div class="footer-item">
                        <h6>Earn Money</h6>
                        <a href="#">Become Partners</a>
                    </div>
                </footer>
            </>
        )
    }
}

export default Home;