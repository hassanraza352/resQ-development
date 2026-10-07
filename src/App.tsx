import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./register";
import "./App.css"
import Dashboard from "./user/dashboard";
import Hospitals from "./user/hospital";
import LiveMap from "./user/map";
import Messages from "./user/messages";
import MyReports from "./user/my-reports";
import Notifications from "./user/notification";
import Report from "./user/report";
import Settings from "./user/setting";
import ServiceUnits from "./user/units";
import ReportDetails from "./user/report-details";
import Requests from "./unit/requests";
import Profile from "./unit/profile";
import UnitDashboard from "./unit/dashboard";
import ActiveAssignment from "./unit/assignment";
import Beds from "./hospital/beds";
import Cases from "./hospital/cases";
import Overview from "./hospital/overview";
import Settings1 from "./hospital/settings";
import Staff from "./hospital/staff";
import Users from "./admin/users";
import Settings2 from "./admin/settings";
import Reports from "./admin/reports";
import Incidents from "./admin/incidents";
import Hospitals1 from "./admin/hospitals";
import Dashboardadmin from "./admin/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        {/* user paths */}
        <Route path="/user/dashboard" element={<Dashboard/>}/>
        <Route path="/user/hospital" element={<Hospitals/>}/>
        <Route path="/user/map" element={<LiveMap/>}/>
        <Route path="/user/messages" element={<Messages />} />
        <Route path="/user/my-reports" element={<MyReports />} />
        <Route path="/user/notifications" element={<Notifications />}/>
        <Route path="/user/report-details"element={<ReportDetails />}/>
        <Route path="/user/report" element={<Report />}/>
        <Route path="/user/settings" element={<Settings />}/>
        <Route path="/user/units" element={<ServiceUnits />}/>
                 {/* unit paths */}
        <Route path="/unit/assignment" element={<ActiveAssignment />}/>
        <Route path="/unit/dashboard" element={<UnitDashboard />}/>
        <Route path="/unit/map" element={<LiveMap />}/>
        <Route path="/unit/profile" element={<Profile />}/>
        <Route path="/unit/request" element={<Requests />}/>
        <Route path="/unit/setting" element={<Settings />}/>
        {/* Hospital paths */}
        <Route path="/hospital/beds" element={<Beds />}/>
        <Route path="/hospital/cases" element={<Cases />}/>
        <Route path="/hospital/overview" element={<Overview />}/>
        <Route path="/hospital/setting" element={<Settings1 />}/>
        <Route path="/hospital/staff" element={<Staff />}/>
        {/* admin paths */}
        <Route path="/admin/dashboard" element={<Dashboardadmin />}/>
        <Route path="/admin/hospital" element={<Hospitals1 />}/>
        <Route path="/admin/incident" element={<Incidents />}/>
        <Route path="/admin/reports" element={<Reports />}/>
        <Route path="/admin/setting" element={<Settings2 />}/>
        <Route path="/admin/user" element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;