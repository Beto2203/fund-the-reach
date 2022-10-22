import '../styles/Home.css';
import { HiOutlineCircleStack, HiOutlineScale } from 'react-icons/hi2';
import { TiHeartOutline } from 'react-icons/ti';
import { IoRibbonOutline } from 'react-icons/io5';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { TbVaccine } from 'react-icons/tb';

function Home() {

  return (
    <div>
      <main>
        <h1>BETTER LIFE FOR EVERYONE</h1>
      </main>

      <section id="objectives" className="cardContainer">
        <div id="education" className="cardItem">
          <span>Education</span>
        </div>
        <div id="health" className="cardItem">
          <span>Health</span>
        </div>
        <div id="water" className="cardItem">
          <span>Water</span>
        </div>
      </section>

      <section id="missions">
        <div id="missionsTitle" className="subHeading">
          Our Main
          <h2>MISSIONS</h2>
        </div>

        <ul id="missionsContainer">
          <li>
            <div className="missionIcon">{HiOutlineCircleStack()}</div>
            <br />
            Donations
          </li>
          <li>
            <div className="missionIcon">{TiHeartOutline()}</div>
            <br />
            Peace
          </li>
          <li>
            <div className="missionIcon">{HiOutlineScale()}</div>
            <br />
            Justice
          </li>
          <li>
            <div className="missionIcon">{IoRibbonOutline()}</div>
            <br />
            Prevention
          </li>
          <li>
            <div className="missionIcon">{AiOutlineMedicineBox()}</div>
            <br />
            Doctors
          </li>
          <li>
            <div className="missionIcon">{TbVaccine()}</div>
            <br />
            Vaccines
          </li>
        </ul>
      </section>

      <section id="quotes">
        <h3>Maya Angelou</h3>
        <p>"I have found that among its other benefits, giving liberates the soul of the giver"</p>
      </section>

      <section id="achievements">
        <div id="achievementImagesContainer" className="cardContainer">
          <iframe
            src="https://www.youtube.com/embed/EHh5_6vcCoo?mute=1"
            title="waterWellsForAfricaVideo"
            id="waterVideo">
          </iframe>

          <div id="waterWells" className="cardItem">
            <span>Water Wells</span>
          </div>
          <div id="adoptions" className="cardItem">
            <span>Adoptions</span>
          </div>
          <div id="works" className="cardItem">
            <span>Works</span>
          </div>
        </div>

        <div id="achievementsCharts">
          <div className="subHeading">
            Mission
            <h2>ACHIEVED</h2>
          </div>
          <div id="achievementsContainer">
            <ul>
              <li className="achievementItem">Water Wells <span className="achievementNum">30</span></li>
              <li className="achievementItem">English Teachers <span className="achievementNum">221</span></li>
              <li className="achievementItem">Vaccines <span className="achievementNum">1900</span></li>
              <li className="achievementItem">New Schools <span className="achievementNum">10</span></li>
              <li className="achievementItem">Doctors <span className="achievementNum">150</span></li>
              <li className="achievementItem">New Houses <span className="achievementNum">43</span></li>
              <li className="achievementItem">Clothes <span className="achievementNum">500</span></li>
              <li className="achievementItem">New Shoes <span className="achievementNum">1000</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="newsletter">

      </section>
    </div>
  );
}

export default Home;
