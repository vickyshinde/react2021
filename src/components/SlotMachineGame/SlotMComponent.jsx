const SlotM = (props) => {
  // let x = 'vicky';
  // let y = 'vicky';
  // let z = 'vicky';

  const { x, y, z } = props;
  // const y = props.y;
  // const z = props.z;

  //   {x === y && y === z ? (
  //     <>
  //       <h4>
  //         {x} {y} {z}
  //       </h4>
  //       <h3>Matching</h3>
  //       <hr />
  //     </>
  //   ) : (
  //     <>
  //       <h4>
  //         {x} {y} {z}
  //       </h4>
  //       <h3>Not Matching</h3>
  //       <hr />
  //     </>
  //   );
  // }

  if (x === y && y === z) {
    return (
      <>
        <h4>
          {x} {y} {z}
        </h4>
        <h3>Matching</h3>
        <hr />
      </>
    );
  }
  return (
    <>
      <h4>
        {x} {y} {z}
      </h4>
      <h3>Not Matching</h3>
      <hr />
    </>
  );
};

export default SlotM;
