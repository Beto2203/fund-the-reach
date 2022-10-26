import '../styles/Causes.css';
import ong2 from '../media/ong2.jpg';
import cause1 from '../media/cause1.jpg';
import cause2 from '../media/cause2.jpg';
import cause3 from '../media/cause3.jpg';
import cause4 from '../media/waterwells.jpg';
import cause5 from '../media/water.jpg';
import cause6 from '../media/adoptions.jpg';
import SectionHeading from './SectionHeading.js';
import Card from './Card';

const causes = [
  {
    imageUrl: cause1,
    title: 'Water For All Children',
    goal: 320000,
    raised: 78000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.',
    id: 1,
    color: '#00baa3'
  },
  {
    imageUrl: cause2,
    title: 'Clean Water For All',
    goal: 190000,
    raised: 80000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.',
    id: 2,
    color: '#efc94c'
  },
  {
    imageUrl: cause3,
    title: 'New School Teachers',
    goal: 420000,
    raised: 82000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.',
    id: 3,
    color: '#d55342'
  },
  {
    imageUrl: cause4,
    title: 'New Kindergarten',
    goal: 150000,
    raised: 84000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.',
    id: 4,
    color: '#2780ba'
  }
  ,
  {
    imageUrl: cause5,
    title: 'Clothes For Everyone',
    goal: 300000,
    raised: 86000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.',
    id: 5,
    color: '#ef884c'
  },
  {
    imageUrl: cause6,
    title: 'Construction Of Water Wells',
    goal: 90000,
    raised: 88000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.',
    id: 6,
    color: '#b250d2'
  }
];

function Causes() {

  return (
    <div>
      <SectionHeading heading="Our Causes" imageUrl={ong2} />

      <div id="cardContainer">
        {
          causes.map(cause => <Card key={cause.id} causeObject={cause} />)
        }
      </div>
    </div>
  );
}

export default Causes;
