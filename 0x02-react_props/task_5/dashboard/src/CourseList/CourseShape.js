import PropTypes from 'prop-types';
import React from 'react';

function CourseShape({id, name, credit}) {

}

CourseShape.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
}

export default CourseShape;