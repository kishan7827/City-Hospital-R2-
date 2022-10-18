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
import Layout from './admin/components/Layout';
import MedisinesAdmin from './admin/container/MedisinesAdmin';
import DoctorAdmin from './admin/container/DoctorAdmin';
import PatientAdmin from './admin/container/PatientAdmin';
import ListAppointment from './container/appointment/ListAppointment';
import DoctorsDetails from './container/doctors/DoctorsDetails';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <>
      
      <Switch>
        <PublicRoute path={'/home'} exact component={Home} />
        <PublicRoute path={'/about'} exact component={About} />
        <PublicRoute path={'/departments'} exact component={Departments} />
        <PublicRoute path={'/medicens'} exact component={Medicens} />
        <PublicRoute path={'/doctors'} exact component={Doctors} />
        <PublicRoute path={'/contect'} exact component={Contect} />
        <PublicRoute path={'/appointment'} exact component={Appointment} />
        <PublicRoute path={'/login'} exact component={Auth} restricted={true}/>
        <PublicRoute path={'/list_appointment'} exact component={ListAppointment}/>
        <PublicRoute path={'/doctorsdetails'} exact component={DoctorsDetails}/>
      </Switch>
      
      {/* <Layout>
        <Switch>
          <Route path={'/medisines_admin'} exact component={MedisinesAdmin} />
          <Route path={'/doctors_admin'} exact component={DoctorAdmin} />
          <Route path={'/patient_admin'} exect component={PatientAdmin}/>
        </Switch>
      </Layout> */}
    </>
  );
}

export default App;
