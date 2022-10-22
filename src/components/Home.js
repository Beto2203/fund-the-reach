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

      <section id="objectives">
        <div id="education" className="objectiveCard">
          <span>Education</span>
        </div>
        <div id="health" className="objectiveCard">
          <span>Health</span>
        </div>
        <div id="water" className="objectiveCard">
          <span>Water</span>
        </div>
      </section>

      <section id="missions">
        <div id="missionsTitle">
          Our Main
          <h2>MISSIONS</h2>
        </div>

        <ul id="missionsContainer">
          <li>
            <div className="missionIcon">{HiOutlineCircleStack()}</div>
            <br/>
            Donations
          </li>
          <li >
            <div className="missionIcon">{TiHeartOutline()}</div>
            <br/>
            Peace
          </li>
          <li >
            <div className="missionIcon">{HiOutlineScale()}</div>
            <br/>
            Justice
          </li>
          <li >
            <div className="missionIcon">{IoRibbonOutline()}</div>
            <br/>
            Prevention
          </li>
          <li >
            <div className="missionIcon">{AiOutlineMedicineBox()}</div>
            <br/>
            Doctors
          </li>
          <li >
            <div className="missionIcon">{TbVaccine()}</div>
            <br/>
            Vaccines
          </li>
        </ul>
      </section>

      <section id="quotes">
        <h3>Maya Angelou</h3>
        <p>"I have found that among its other benefits, giving liberates the soul of the giver"</p>
      </section>
    </div>
  );
}

export default Home;
