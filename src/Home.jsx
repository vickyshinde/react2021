import Greeting from './components/Greeting/Greeting';

const Home = () => {
  const fName = 'Sharvari';
  const lName = 'Shinde';

  return <Greeting fName={fName} lName={lName} />;
};

export default Home;
