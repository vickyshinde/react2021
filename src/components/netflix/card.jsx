import CardImage from './card-image';

function Card({ imgsrc, title, link }) {
  // console.log(props);
  return (
    <div className="card">
      <CardImage imgsrc={imgsrc} alt="Alt Tag" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{title}</p>
        <a href={link} className="btn btn-primary">
          Watch
        </a>
      </div>
    </div>
  );
}

export default Card;
