import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import Logo from "../../src/img/logo.png";
import { HeaderContext } from "../../context/HeaderContext";
interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
  const { addDynamicRefs } = useContext(HeaderContext);
  const dynamicRefs = useRef([]);
  useEffect(() => {
    console.log(dynamicRefs.current);
    if (dynamicRefs.current && dynamicRefs.current.length)
      addDynamicRefs(dynamicRefs.current);
  }, [dynamicRefs.current]);
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__first">
          <a
            ref={(el) => dynamicRefs.current.push(el)}
            data-da=".footer__mobile, 990"
            href="/"
            className="footer__logo"
          >
            <img src={Logo.src} alt="logo" />
          </a>
          <div className="footer__menu-box">
            <nav className="footer__menu spollers">
              <div className="footer__menu-title">Company</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    About Us
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Key Members
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Contact Us
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Become A Partner
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Become A Vendor
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__menu spollers">
              <div className="footer__menu-title">Patients</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Upload Prescription
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Request A Call Back
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Nearest Lab
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    SRL Care Packages
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Feedback
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__menu spollers">
              <div className="footer__menu-title">SRL Universe</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    DDRC SRL
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    SRL Phadke Labs
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    SRL Dubai
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    SRL Nepal
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__menu spollers">
              <div className="footer__menu-title">Other</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Employee Portal
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Compliance Portal
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    CC Portal
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Investors
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    COVID-19
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Blog
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Events and Camps
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="">
                    Offers
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer__menu-items">
              <nav className="footer__menu spollers">
                <div className="footer__menu-title">Reach Us</div>
                <ul className="footer__menu-list">
                  <li className="footer__menu-item">
                    <a className="footer__menu-link" href="">
                      306, Tower A, Unitech Cyber Park, Sector 39, Gurugram
                      122002
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="footer__menu spollers">
                <div className="footer__menu-title">Corporate</div>
                <ul className="footer__menu-list">
                  <li className="footer__menu-item">
                    <a className="footer__menu-link" href="">
                      0124-6261196
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="footer__menu spollers">
                <div className="footer__menu-title">Helpline</div>
                <ul className="footer__menu-list">
                  <li className="footer__menu-item">
                    <a className="footer__menu-link" href="">
                      0124-6261196
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__mobile"></div>
          <div
            ref={(el) => dynamicRefs.current.push(el)}
            data-da=".footer__mobile, 990"
            className="footer__social"
          >
            <div className="footer__social-title">Follows Us</div>
            <div className="footer__social-items">
              <a href="" className="footer__social-item _icon-twitter"></a>
              <a href="" className="footer__social-item _icon-facebook"></a>
              <a href="" className="footer__social-item _icon-instagram"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__second">
        <div className="footer__end-text">
          <p>
            © 2022 - SRL Diagnostics. All Rights Reserved | Privacy Policy |
            Disclaimer | Terms & Conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
