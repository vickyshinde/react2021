import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import HandlingEvents from './components/handlingEvents/handlingEvents';
import Hooks from './components/hooks/Hooks';
import ComponentExercise from './components/componentExercise/component-exercise';
import CovidUpdate from './components/covidUpdate/covid-update';
import SlotMachineGame from './components/SlotMachineGame/SlotMachineGame';
import SimpleCalc from './components/SimpleCalculator/SimpleCalc';
import Greeting from './components/Greeting/Greeting';
import Netflix from './components/netflix/netflix';
import Form from './components/form/form';
import NavBar from './components/shared/Navbar';
import Error from './components/Error/Error';
import IfElseTernery from './components/IfElseTernery/IfElseTernery';
import RouteRenderMethod from './components/RouteRenderMethod/RouteRenderMethod';
import useParamsHooks from './components/hooks/HooksuseParams';
import useParamsHooksTwo from './components/hooks/HooksuseParams-twoParam';
import HooksuseLocation from './components/hooks/HooksuseLocation';
import HooksuseHistory from './components/hooks/HooksuseHistory';
import LiveSearchFilter from './components/LiveSearchFilter/LiveSearchFilter';
import WeatherApp from './components/WeatherApp/WeatherApp';
import ToDoApp from './components/ToDoApp/ToDoApp';
import ToDoAppAdvance from './components/ToDoApp/ToDoAppAdvance';
import FilterGallery from './components/FilterGallery/FilterGallery';

import HooksComponent from './components/hooks/HooksComponent';
import LoginForm from './components/hooks/LoginForm';
import HooksUseEffect from './components/hooks/HooksUseEffect';
import HooksUseEffectApi from './components/hooks/HooksUseEffectApi';
import HooksUseReducer from './components/hooks/HooksUseReducer';
import HooksUseContext from './components/hooks/useContext/HooksUseContext';
import CustomHooks from './components/hooks/CustomHooks/CustomHooks';

import Testimonial from './components/Testimonial/Testimonial';
import GoogleKeepApp from './components/GoogleKeepApp/GoogleKeepApp';
import UserListing from './components/usersCrud/userListing';
import UserAdd from './components/usersCrud/userAdd';
import UserEdit from './components/usersCrud/userEdit';
import Posts from './components/pagination/posts';
import Slider from './components/Slider/Slider';
import CustomHook from './components/customHooks';
import AppTourGuide from './components/aapTourGuide/aapTourGuide';

function App() {
  return (
    <div className="pageWrap">
      <div className="row no-gutters">
        <div className="col-2">
          <NavBar />
        </div>
        <div className="col-10">
          <div className="section">
            <Switch>
              <Route path="/slider" component={Slider} />

              <Route path="/customHooks" component={CustomHook} />
              <Route path="/covidUpdate" component={CovidUpdate} />
              <Route path="/weatherApp" component={WeatherApp} />
              <Route path="/todoApp" component={ToDoApp} />
              <Route path="/todoAppAdvance" component={ToDoAppAdvance} />
              <Route path="/filterGallery" component={FilterGallery} />
              <Route path="/" component={Home} exact />
              <Route path="/handlingEvents" component={HandlingEvents} />
              <Route path="/hooks" component={Hooks} />
              <Route path="/hooksUseEffectApi" component={HooksUseEffectApi} />
              <Route path="/hooksComponent" component={HooksComponent} />
              <Route path="/hooksUseEffect" component={HooksUseEffect} />
              <Route path="/hooksUseReducer" component={HooksUseReducer} />
              <Route path="/hooksUseContext" component={HooksUseContext} />
              <Route path="/CustomHooks" component={CustomHooks} />
              <Route path="/form" component={Form} />
              <Route path="/loginForm" component={LoginForm} />
              <Route path="/componentExerciser" component={ComponentExercise} />
              <Route path="/netflix" component={Netflix} />
              <Route path="/slotMachineGame" component={SlotMachineGame} />
              <Route path="/simpleCalc" component={SimpleCalc} />
              <Route path="/testimonial" component={Testimonial} />
              <Route path="/googleKeepApp" component={GoogleKeepApp} />

              <Route path="/posts" component={Posts} />
              <Route path="/appTourGuide" component={AppTourGuide} />

              <Route path="/user-listing" component={UserListing} />
              <Route path="/user-add" component={UserAdd} />
              <Route path="/user-edit/:id" component={UserEdit} />

              <Route
                path="/greeting"
                // eslint-disable-next-line react/no-unstable-nested-components
                component={() => <Greeting fName="Vicky" lName="Shinde" />}
              />
              <Route path="/ifElseTernery" component={IfElseTernery} />
              <Route path="/useParamsHooks/:fname" component={useParamsHooks} />
              <Route path="/hooksuseLocation/:fname/:lname" component={HooksuseLocation} />
              <Route path="/useParamsHooksTwo/:fname/:lname" component={useParamsHooksTwo} />
              <Route path="/hooksuseHistory/:fname/:lname" component={HooksuseHistory} />
              <Route path="/liveSearchFilter" component={LiveSearchFilter} />
              {/* Difference between Render and Component Prop */}
              <Route
                path="/routeRenderMethod"
                // eslint-disable-next-line react/no-unstable-nested-components
                component={() => <RouteRenderMethod name="Vicky" surname="Shinde" age="25" />}
              />
              {/* only diff is *component* to *render* */}
              {/* *render* will update the exiting component and *component* will create new every time */}
              {/* <Route
                path="/routeRenderMethod"
                render={() => (
                  <RouteRenderMethod name="Vicky" surname="Shinde" age="25" />
                )}
              /> */}
              <Route component={Error} />
              {/* <Redirect to="/" /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
