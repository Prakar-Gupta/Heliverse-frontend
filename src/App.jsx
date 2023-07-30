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
        const response = await axios.get('https://heliverse-backend-zeta.vercel.app/api/users');
        setEmployeesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEmployeeData();
  }, []);
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
