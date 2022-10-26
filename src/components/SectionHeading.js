
function SectionHeading({ heading, imageUrl }) {

  return (
    <div className="sectionHeading" style={{backgroundImage: `url("${imageUrl}")`}}>
      <h1>{heading}</h1>
    </div>
  );
}

export default SectionHeading;
