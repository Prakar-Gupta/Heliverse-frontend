import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import EmployeeList from '../components/EmployeeList'
import TeamPage from '../components/TeamPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setEmployeesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEmployeeData();
  }, []);
  // const employeesData = [
  //   {
  //     "id": 1,
  //     "first_name": "Anet",
  //     "last_name": "Doe",
  //     "email": "adoe0@comcast.net",
  //     "gender": "Female",
  //     "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
  //     "domain": "Sales",
  //     "available": false
  //   },
  //   {
  //     "id": 2,
  //     "first_name": "Honoria",
  //     "last_name": "Caughte",
  //     "email": "hcaughte1@google.com.br",
  //     "gender": "Female",
  //     "avatar": "https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
  //     "domain": "Finance",
  //     "available": true
  //   },
  //   {
  //     "id": 3,
  //     "first_name": "Wiley",
  //     "last_name": "Boarder",
  //     "email": "wboarder2@xing.com",
  //     "gender": "Male",
  //     "avatar": "https://robohash.org/laboriosamdolorepossimus.png?size=50x50&set=set1",
  //     "domain": "Marketing",
  //     "available": false
  //   },
  //   {
  //     "id": 4,
  //     "first_name": "Brett",
  //     "last_name": "Ivetts",
  //     "email": "bivetts3@netlog.com",
  //     "gender": "Agender",
  //     "avatar": "https://robohash.org/ullamsuntet.png?size=50x50&set=set1",
  //     "domain": "Finance",
  //     "available": true
  //   },
  //   {
  //     "id": 5,
  //     "first_name": "Horst",
  //     "last_name": "Grastye",
  //     "email": "hgrastye4@dmoz.org",
  //     "gender": "Male",
  //     "avatar": "https://robohash.org/utquirepudiandae.png?size=50x50&set=set1",
  //     "domain": "Finance",
  //     "available": false
  //   },
  //   {
  //     "id": 6,
  //     "first_name": "Monique",
  //     "last_name": "Wilbud",
  //     "email": "mwilbud5@state.gov",
  //     "gender": "Female",
  //     "avatar": "https://robohash.org/maximequiomnis.png?size=50x50&set=set1",
  //     "domain": "IT",
  //     "available": true
  //   },
  //   {
  //     "id": 7,
  //     "first_name": "Kalindi",
  //     "last_name": "Vinson",
  //     "email": "kvinson6@g.co",
  //     "gender": "Female",
  //     "avatar": "https://robohash.org/occaecatinihilquos.png?size=50x50&set=set1",
  //     "domain": "Management",
  //     "available": true
  //   },
  //   {
  //     "id": 8,
  //     "first_name": "Janos",
  //     "last_name": "Le Noire",
  //     "email": "jlenoire7@sakura.ne.jp",
  //     "gender": "Male",
  //     "avatar": "https://robohash.org/praesentiumquasicorporis.png?size=50x50&set=set1",
  //     "domain": "Management",
  //     "available": true
  //   },
  //   {
  //     "id": 9,
  //     "first_name": "Corella",
  //     "last_name": "Coniff",
  //     "email": "cconiff8@guardian.co.uk",
  //     "gender": "Bigender",
  //     "avatar": "https://robohash.org/nihilexcepturiomnis.png?size=50x50&set=set1",
  //     "domain": "UI Designing",
  //     "available": false
  //   },
  //   {
  //     "id": 10,
  //     "first_name": "Cecilia",
  //     "last_name": "Waldocke",
  //     "email": "cwaldocke9@gmpg.org",
  //     "gender": "Female",
  //     "avatar": "https://robohash.org/commodiestvoluptatem.png?size=50x50&set=set1",
  //     "domain": "Management",
  //     "available": true
  //   },
  // ]
  const [showTeams, setShowTeams] = useState(false);

  const handleShowTeamsPage = () => {
    setShowTeams(true);
  };

  const handleShowEmployeeList = () => {
    setShowTeams(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList employees={employeesData} />}>
        </Route>
        <Route path='/teampage' element={<TeamPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
