import '../styles/Footer.css';
import logo from '../media/logo.png';
import partner1 from '../media/partner1.png'
import partner2 from '../media/partner2.png'
import partner3 from '../media/partner3.png'
import partner4 from '../media/partner4.png'
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';

function Footer() {

  return (
    <footer>
      <div id="steps">
        <img id="footerLogo" src={logo} alt="Fund the Reach logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur ea eveniet hic laudantium provident quas quibusdam unde ut!
          Assumenda consequatur</p>

        <ul>
          <li><span className="footerIcon" style={{border: '1px solid yellow', color: 'yellow'}}>{RiNumber1()}</span> Register to our website!</li>
          <li><span className="footerIcon" style={{border: '1px solid red', color: 'red'}}>{RiNumber2()}</span>Create your own causes</li>
          <li><span className="footerIcon" style={{border: '1px solid #3cbbeb', color: '#3cbbeb'}}>{RiNumber3()}</span>Stay tuned about the cause</li>
          <li><span className="footerIcon" style={{border: '1px solid green', color: 'green'}}>{RiNumber4()}</span>Get the help you need</li>
        </ul>
      </div>

      <div id="partners">
        <h5>Our Partners</h5>
        <ul>
          <li><img src={partner1} alt="partner one" /></li>
          <li><img src={partner2} alt="partner two" /></li>
          <li><img src={partner3} alt="partner three" /></li>
          <li><img src={partner4} alt="partner four" /></li>
        </ul>

        <form>
          <label htmlFor="footerNewsletter">Newsletter</label>
          <input type="email" name="footerNewsletter" id="footerNewsletter" placeholder="Insert your Email"/>
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
