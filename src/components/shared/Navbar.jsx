import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav flex-column nav-pills">
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/user-listing">
            User CRUD
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/appTourGuide">
            App Tour Guide
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/slider">
            Slider
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/customHooks">
            customHooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/posts">
            Posts Pagination
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/liveSearchFilter">
            Live Search Filter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/weatherApp">
            Weather App
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/todoapp">
            To Do App
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/todoAppAdvance">
            To Do App Advance - <br />
            Edit, Update, localStorage
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/filterGallery">
            Filter Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/testimonial">
            Testimonial
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/googleKeepApp">
            Google Keep App
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/form">
            Form
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/componentExerciser">
            Component Exerciser
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/covidUpdate">
            Covid Update
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/netflix">
            Netflix
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/handlingEvents">
            Handling Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooks">
            Hooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooksUseEffectApi">
            Hooks UseEffect Api
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooksUseReducer">
            Hooks UseReducer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooksUseContext">
            Hooks UseContext
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            exact
            className="nav-link"
            activeClassName="active"
            to="/customHooks"
          >
            Custom Hooks
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/HooksComponent">
            Hooks All Component
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/loginForm">
            Login Form
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooksUseEffect">
            Use Effect
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/slotMachineGame">
            SlotMachineGame
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/simpleCalc">
            Simple Calc
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/greeting">
            Greeting
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/ifElseTernery">
            If Else Ternery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/routeRenderMethod">
            Route Render Method and Component Prop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/useParamsHooks/vicky">
            useParams Hooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/useParamsHooks/Shinde">
            useParams Hooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/useParamsHooksTwo/vicky/shinde">
            Tow useParams Hooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooksuseLocation/vicky/shinde">
            useLocation Hooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/hooksuseHistory/vicky/shinde">
            useHistory Hooks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
