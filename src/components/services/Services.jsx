import React, { useState } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faBug} from '@fortawesome/free-solid-svg-icons';


const Services=()=>{
    const figmaSvg=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" 
    style={{ fill: 'white', width: '40px', height: '40px', marginBottom:'20px' }}
    ><path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"/></svg>
    
      
    return(
        <div className="services" id='services'>
            <div className="container"> 
                <h1 className="sub-heading">Services</h1>
                <div className="services-list">
                    <div className="service">
                        <FontAwesomeIcon icon={faCode} className='service-icon' />
                        <h2>Flutter Development</h2>

                        <p>
                        Professional Flutter app development services to help businesses create beautiful, high-performance mobile applications for both Android and iOS all other supported platforms. Flutter is a popular framework developed by Google enabling the creation of seamless & scalable cross-platform mobile applications with a single codebase.
                        </p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faBug} className='service-icon' />
                        <h2>Flutter App Bug Fixes</h2>
                        <p>
                        Efficient and reliable Flutter app bug fix services to help clients overcome any issues that might be hindering the smooth operation of app. I understand the importance of a bug-free app, and I am equipped with the expertise and knowledge to identify and fix any problems in your Flutter app. My bug fix service is tailored to my clients' development needs.
                        </p>
                    </div>
                    <div className="service">
                        <div >{figmaSvg}</div> 
                        <h2>Figma / Xd / Photoshop to Flutter</h2>
                        <p>
                        Comprehensive service that transforms your Figma, Adobe XD, or Photoshop design into a fully-functional Flutter application. My expertise in using these design tools and developing mobile applications allow me to bridge the gap between design and development. My process ensures that the final product is visually appealing and optimized.
                        </p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faCode} className='service-icon' />
                        <h2>Website Development</h2>
                        <p>
                        Elevate your online presence with professional website development services! User-friendly websites tailored to your unique brand identity. From responsive design to seamless navigation, we ensure your site engages and captivates your audience. Embrace cutting-edge technologies and transform your online vision into a reality with our comprehensive website development solutions. Let us empower your business in the digital landscape, delivering a website that not only looks impressive but performs exceptionally across all devices.
                        </p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faBug} className='service-icon' />
                        <h2>Website Bug Fixes</h2>
                        <p>
                        Offering expert website bug fixing services to swiftly identify and eliminate glitches, ensuring your site operates seamlessly for an enhanced user experience. Our dedicated team specializes in pinpointing and resolving a wide range of website bugs, providing a seamless online experience for your visitors and boosting your site's overall performance. Trust us to diagnose and fix website bugs efficiently, delivering reliable solutions to ensure your website operates flawlessly, minimizing downtime and maximizing user satisfaction.
                        </p>
                    </div>
                    <div className="service">
                    <div >{figmaSvg}</div> 
                        <h2>Figma / Xd / Photoshop to Web</h2>
                        <p>
                        Elevate your web design game with precision and creativity using industry-leading design tools like Figma, Adobe XD, and Photoshop. Craft visually stunning websites that captivate your audience and enhance user experience. Transform your web design concepts into reality with the cutting-edge features of Figma, XD, and Photoshop. Create responsive, user-friendly interfaces that leave a lasting impression, and stay ahead in the competitive digital landscape. Unlock the potential of your web projects by harnessing the power of Figma, XD, and Photoshop.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;