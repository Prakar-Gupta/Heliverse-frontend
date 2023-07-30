import React, { useState, useEffect } from 'react';
import './TeamPage.css'
import axios from 'axios';

const TeamCard = ({ team }) => {
    return (
        <div className="team-card">
            <h2>{team.team_name}</h2>
            {team.users.map((user) => (
                <img key={user.id} src={user.avatar} alt="User Avatar" />
            ))}
        </div>
    );
};

const TeamPage = () => {
    const [teams, setTeams] = useState([]);

    const handleCreateTeam = async () => {
        const enteredTeamName = window.prompt('Enter team name:');
        if (enteredTeamName) {
            try {
                const response = await axios.post('https://heliverse-backend-zeta.vercel.app/api/team', {
                    team_name: enteredTeamName,
                });
                console.log('Team created successfully:', response.data);
                setTeams((prevTeams) => [...prevTeams, response.data]);
            } catch (error) {
                console.error('Error creating team:', error);
            }
        }
    };

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('https://heliverse-backend-zeta.vercel.app/api/team');
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };
        fetchTeams();
    }, []);

    return (
        <div>
            <h1>Teams Page</h1>
            <button onClick={handleCreateTeam}>Create Team</button>
            {teams.map((team) => (
                <TeamCard key={team._id} team={team} />
            ))}
        </div>
    );
};

export default TeamPage;
