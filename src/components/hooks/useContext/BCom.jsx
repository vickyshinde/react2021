// eslint-disable-next-line import/no-cycle
import CCom from './CCom';

const BCom = () => {
  return (
    <div>
      <h1>BCom</h1>
      <CCom />
    </div>
  );
};

export default BCom;
