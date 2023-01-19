const CardImage = function ({ imgsrc }) {
  // console.log(props);
  return (
    <div>
      <img src={imgsrc} alt="Alt Tag" className="card-img-top" />
      Card Image child component
    </div>
  );
};

export default CardImage;
