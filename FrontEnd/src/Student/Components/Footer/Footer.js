import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.css";
import logo from "../../../Photo/logo.png";
export default function Footer() {
  return (
    <div class="footer">
        <div class="right">
            <div class="su">
                <img src={logo}/>
            </div>
            <div class="link">
                <a href="https://www.su.edu.eg/index.php/arish_it-faculty-members/"> Teaching Staff </a>
                <a
                    href="- [ ] https://www.google.com/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B3%D9%8A%D9%86%D8%A7%D8%A1+%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D8%B4+-+Sinai+University+Arish%D8%8C+%D9%82%D8%B3%D9%85+%D8%AB%D8%A7%D9%84%D8%AB+%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D8%B4%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%B4%D9%85%D8%A7%D9%84+%D8%B3%D9%8A%D9%86%D8%A7%D8%A1+16020%E2%80%AD/@31.114817,33.6907199,16z/data=!4m6!3m5!1s0x14fc299dea1f80cf:0x801951620eae76fa!8m2!3d31.114817!4d33.6907199!16s%2Fm%2F0crhxrl">Location
                </a>
            </div>
        </div>
        <div class="left">
            <div class="start">
            <a href="https://www.su.edu.eg/index.php/arish_it-faculty-members/"> Services </a></div>
            <div class="middle">
                <a href="https://www.su.edu.eg/index.php/arish-it/"> About </a>
                <a href="Admission@su.edu.eg"> Contact Us</a>
            </div>
            <div class="end"> <a href="https://www.facebook.com/sinaiunieg?mibextid=ZbWKwL"> Follow Us </a>
                <div class="social-media-links">
                <a href="https://www.facebook.com/sinaiunieg?mibextid=ZbWKwL"><FaFacebook/></a>
                <a href="https://twitter.com/sinaiunieg"><FaTwitter/></a>
                <a href="https://www.instagram.com/sinaiunieg?igshid=OGQ5ZDc2ODk2ZA="><FaInstagram/></a>
                    </div>
            </div>
            
        </div>
    </div>
  );
}
