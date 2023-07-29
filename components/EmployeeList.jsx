import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css'
import { useNavigate } from "react-router-dom";

const EmployeeList = ({ employees }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const itemsPerPage = 20; // Number of users to display per page

    // Filter and paginate the employees based on the search query and selected filters
    const filteredEmployees = employees.filter((employee) => {
        const fullName = `${employee.first_name} ${employee.last_name}`.toLowerCase();
        const domainMatch =
            selectedDomain === '' || employee.domain.toLowerCase() === selectedDomain.toLowerCase();
        const genderMatch =
            selectedGender === '' || employee.gender.toLowerCase() === selectedGender.toLowerCase();
        const availabilityMatch =
            selectedAvailability === '' || employee.available === (selectedAvailability === 'available');

        return (
            fullName.includes(searchQuery.toLowerCase()) && domainMatch && genderMatch && availabilityMatch
        );
    });

    const teampage = () => {
        navigate('/teampage')
    }

    // Calculate the total number of pages needed
    const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

    // Get the current page of employees to display
    const indexOfLastEmployee = currentPage * itemsPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page when a new search query is entered
    };

    const handleDomainChange = (event) => {
        setSelectedDomain(event.target.value);
        setCurrentPage(1); // Reset to the first page when a new domain filter is selected
    };

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        setCurrentPage(1); // Reset to the first page when a new gender filter is selected
    };

    const handleAvailabilityChange = (event) => {
        setSelectedAvailability(event.target.value);
        setCurrentPage(1); // Reset to the first page when a new availability filter is selected
    };

    // Function to change the current page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="employee-list">
            <h1>Employees List</h1>
            <div className='header'>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className='team'>
                    <button onClick={teampage}> Teams </button>

                </div>
            </div>

            <div className='filters'>
                <label>
                    <span>Domain:</span>
                    <select value={selectedDomain} onChange={handleDomainChange}>
                        <option value="">All</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        {/* Add other domain options as needed */}
                    </select>
                </label>
                <label>
                    <span>Gender:</span>
                    <select value={selectedGender} onChange={handleGenderChange}>
                        <option value="">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Agender">Agender</option>
                        {/* Add other gender options as needed */}
                    </select>
                </label>
                <label>
                    <span>Availability:</span>
                    <select value={selectedAvailability} onChange={handleAvailabilityChange}>
                        <option value="">All</option>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </label>
            </div>
            {currentEmployees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
            <div className="pagination">
                {/* Pagination controls */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className='pgn-button' key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
