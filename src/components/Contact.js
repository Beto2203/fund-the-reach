import '../styles/Contact.css';
import ong1 from '../media/ong1.jpg';
import SectionHeading from './SectionHeading';

function Contact() {

  return (
    <div>
        <SectionHeading heading="Contact Us" imageUrl={ong1} />

      <div id="contactForm">
        <h3>We want to hear about you</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur atque commodi,
          cupiditate dolor dolore dolorem dolores dolorum enim eveniet explicabo facere impedit,
          molestias nemo nesciunt similique suscipit, vel.
        </p>

        <form>
          <input type="text" id="contactName" placeholder="Name"/>
          <input type="email" id="contactMail" placeholder="Email" />
          <textarea name="contactMessage" id="contactMessage" cols="10" rows="5" placeholder="Message"></textarea>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
