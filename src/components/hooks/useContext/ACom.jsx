// eslint-disable-next-line import/no-cycle
import BCom from './BCom';

const ACom = () => {
  return (
    <div>
      <h1>ACom</h1>
      <BCom />
    </div>
  );
};

export default ACom;
