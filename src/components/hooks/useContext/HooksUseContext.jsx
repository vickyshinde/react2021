/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';
// eslint-disable-next-line import/no-cycle
import ACom from './ACom';

// context

// provider

// consumer

const BioData = createContext();
const ObjData = createContext();

const HooksUseContext = () => {
  return (
    <BioData.Provider value="Vicky Shinde">
      <ObjData.Provider value={{ fname: 'vicky', lname: 'shinde', gender: 'male' }}>
        <div>
          <h1>Hooks useContext</h1>
          <ACom />
        </div>
      </ObjData.Provider>
    </BioData.Provider>
  );
};

export default HooksUseContext;

export { BioData, ObjData };
