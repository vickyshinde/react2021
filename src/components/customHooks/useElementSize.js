import { useEffect, useState } from 'react';

const useElementSize = (myRef, ...changeTrigger) => {
  console.log(...changeTrigger);
  console.log(myRef);
  const [elementSize, setElementSize] = useState({
    width: undefined,
    height: undefined
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (myRef.current) {
      const handleElementResize = () => {
        setElementSize({
          width: myRef.current.offsetWidth,
          height: myRef.current.offsetHeight
        });
      };

      // eslint-disable-next-line no-unused-expressions
      myRef.current && myRef.current.addEventListener('resize', handleElementResize);
      handleElementResize();

      return () => {
        window.removeEventListener('resize', handleElementResize);
      };
    }
  }, changeTrigger);

  return elementSize;
};

export default useElementSize;
