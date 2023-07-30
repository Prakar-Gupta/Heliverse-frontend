import React from 'react';
import './EmployeeCard.css';
import axios from 'axios';

const EmployeeCard = ({ employee }) => {
    const addToTeam = async () => {
        try {
            // Make the API call using Axios
            const response = await axios.post('https://heliverse-backend-zeta.vercel.app/api/addUserToTeam', { userId: employee.id, avatar: employee.avatar });
            // Assuming the API returns a success message
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding user to team:', error);
            // Handle the error here
            alert('An error occurred while adding the user to the team.');
        }
    };

    return (
        <div className="card">
            <img src={employee.avatar} alt="Avatar" />
            <div>
                <h2>{`${employee.first_name} ${employee.last_name}`}</h2>
                <p>Email: {employee.email}</p>
                <p>Gender: {employee.gender}</p>
                <p>Domain: {employee.domain}</p>
                {employee.available ? (
                    <p>Status: Available</p>
                ) : (
                    <p>Status: Not Available</p>
                )}
                <button className="add" onClick={addToTeam}>
                    Add to team
                </button>
            </div>
        </div>
    );
};

export default EmployeeCard;
