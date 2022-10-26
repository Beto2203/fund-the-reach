import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Card({ causeObject }) {
  const { imageUrl, title, content, color, goal, raised, id } = causeObject;

  const style = {
    backgroundColor: color
  };

  return (
    <div className="card">
      <img src={imageUrl} alt="Main cause" />
      <h4>{title}</h4>
      <div>Goal: {goal} $ &#160;&#160; Raised: {raised} $</div>
      <p>
        {content}
      </p>
      <Link to={'/causes'} style={style}>Read More</Link>
    </div>
  );
}

export default Card;
