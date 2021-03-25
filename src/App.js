import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Internship from "./components/Internship"
import Project from "./components/Project"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Internship} path='/internships' />
        <Route component={Project} path='/projects' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
