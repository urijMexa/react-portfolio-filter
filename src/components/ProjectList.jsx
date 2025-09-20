import React from 'react';

function ProjectList(props) {
    const { projects } = props;

    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <img src={project.img} alt={project.category} className="project-item-img" />
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
