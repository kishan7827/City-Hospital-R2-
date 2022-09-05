import './App.css';
import Footer from './compnent/footer/Footer';
import Header from './compnent/header/Header';
import { Route, Switch } from "react-router-dom"
import Home from './container/home/Home';
import About from './container/about/About';
import Departments from './container/departments/Departments';
import Doctors from './container/doctors/Doctors';
import Contect from './container/contact/Contect';
import Appointment from './container/appointment/Appointment';
import Auth from './container/auth/Auth';
import Medicens from './container/Medicens/Medicens';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path={'/home'} exact component={Home} />
        <Route path={'/about'} exact component={About} />
        <Route path={'/departments'} exact component={Departments} />
        <Route path={'/medicens'} exact component={Medicens} />
        <Route path={'/doctors'} exact component={Doctors} />
        <Route path={'/contect'} exact component={Contect} />
        <Route path={'/appointment'} exact component={Appointment} />
        <Route path={'/login'} exact component={Auth} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
