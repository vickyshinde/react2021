const FilterGalleryLoop = ({ filterGalleryData }) => {
  // console.log(filterGalleryData);
  return (
    <>
      {!filterGalleryData.length && 'no data found'}
      <div className="row">
        {filterGalleryData.map((item) => {
          const { imgsrc, title, disc, link, category } = item;
          return (
            <div key={title} className="col-3 mb-4">
              <h5>
                <a href={link}>{title}</a>
              </h5>
              <p>{category}</p>
              <img className="img-fluid" src={imgsrc} alt={title} />
              {disc}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterGalleryLoop;
