import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ListCourses from './components/Course/ListCourses';

function App() {
  return (
    <div >
      <Router>
          <div>
              <Routes>
                  {/*<Route path="/" exact component={}></Route>*/}
                  <Route path="/courses" exact  element={<ListCourses/>}/>
                  {/*<Route path="/professors" exact component={}></Route>*/}

              </Routes>
          </div>

      </Router>
    </div>
  );
}

export default App;
