import React from 'react';
import info from '../../info.json';

import './ProjectPage.css';

interface ProjectPageProps {
    // Define your props here
}

const ProjectPage: React.FC<ProjectPageProps> = () => {

    return (
        <div className='projectPage'>
            <h2>Projekt</h2>

            <div className='projects'>
                {info.projects.map((project, index) => (
                    <a href={project.url} key={index} className='project' style={{ backgroundImage: `url(${project.image})` }}>
                        <div className='projectInfo'>
                            <h3>{project.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;