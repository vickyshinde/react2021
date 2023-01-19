import { useEffect, useState } from 'react';
import SubmitButtonWrapped from '../shared/SubmitButton';
import './aapTourGuide.sass';

const tourGuideSteps = [
  {
    title: 'Welcome!',
    description: 'description Welcome'
  },
  {
    title: 'Step 2!',
    description: 'description 2'
  },
  {
    title: 'Step 3!',
    description: 'description 3'
  },
  {
    title: 'Step 4!',
    description: 'description 4'
  },
  {
    title: 'Step 5!',
    description: 'description 5'
  },
  {
    title: 'Step 6!',
    description: 'description 6'
  }
];

const AppTourGuide = () => {
  const [step] = useState(tourGuideSteps);
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState(0);

  // const lengthOfStep = step.length;
  const indexOfLastStep = step.length - 1;
  const activeStep = step[currentStep];
  /* console.log(`step`, step)
  console.log(`currentStep`, currentStep)
  console.log(`activeStep`, activeStep)
  console.log(`indexOfLastStep`, indexOfLastStep)
  console.log(`lengthOfStep`, lengthOfStep) */

  const stepNext = (e, pageNumber) => {
    e.preventDefault();
    setCurrentStep(pageNumber + 1);
  };

  const handlePosition = () => {
    const position1 = currentStep + 1;
    console.log(position1);
    /* if (aaa === 0) {
      setPosition('left');
      console.log(`step 0`);
    }
    if (aaa === 1) {
      setPosition('right');
      console.log(`step 1`);
    }
    if (aaa === 2) {
      setPosition('bottom');
      console.log(`step 2`);
    }
    if (aaa === 3) {
      setPosition('top');
      console.log(`step 3`);
    }
    if (aaa === 4) {
      console.log(`step 4`);
    }
    if (aaa === 5) {
      console.log(`step 5`);
    }
    if (aaa === 6) {
      console.log(`step 6`);
    } */
    switch (position1) {
      case 0:
        setPosition('left');
        console.log(`step 0`);
        break;
      case 1:
        setPosition('right');
        console.log(`step 1`);
        break;
      case 2:
        setPosition('top');
        console.log(`step 2`);
        break;
      case 3:
        setPosition('bottom');
        console.log(`step 3`);
        break;
      case 4:
        setPosition('left');
        console.log(`step 4`);
        break;
      case 5:
        setPosition('right');
        console.log(`step 5`);
        break;
      case 6:
        setPosition('top');
        console.log(`step 6`);
        break;
      default:
      // code block
    }
  };

  useEffect(() => {
    handlePosition();
  }, [currentStep]);

  const stepPrev = (e, pageNumber) => {
    e.preventDefault();
    setCurrentStep(pageNumber - 1);
  };

  const [isTourGuideOpen, setTourGuideIsOpen] = useState(false);
  const toggleTourGuide = () => {
    setTourGuideIsOpen(!isTourGuideOpen);
  };

  return (
    <div>
      <SubmitButtonWrapped title="Open" clsName="btn btn-danger btn-sm ml-1" onClick={toggleTourGuide} />
      {isTourGuideOpen && (
        <div className={`appTourGuide ${position}`}>
          <i className="arrow" />
          <div className={`step-${currentStep}`}>
            <p>
              {currentStep + 1} of {indexOfLastStep + 1}
            </p>
            <h2>{activeStep.title}</h2>
            <p>{activeStep.description}</p>
          </div>
          <div className="d-flex">
            <SubmitButtonWrapped title="End Tutorial" clsName="btn btn-danger btn-sm ml-1" onClick={toggleTourGuide} />
            <SubmitButtonWrapped
              title="Prev"
              clsName="btn btn-danger btn-sm ml-1"
              onClick={(e) => stepPrev(e, currentStep)}
              disabled={currentStep === 0}
            />
            <SubmitButtonWrapped
              title="Next"
              clsName="btn btn-danger btn-sm ml-1"
              onClick={(e) => stepNext(e, currentStep)}
              disabled={currentStep === indexOfLastStep}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppTourGuide;
