import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const { id, image, title,  description} = course;
    const details=description.slice(0,200) +"..." ;
    return (
        <Link to={`../courses/${id}`} Link-label='View Item'>
        <div className="card mx-auto w-96 bg-base-100 shadow-xl p-2">
            <img src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                   
                </div>
            </div>
        </div>
    </Link>
    );
};

export default Course;