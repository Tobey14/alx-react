import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';


function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        {
          listCourses.length == 0 ? <CourseListRow isHeader={false} textFirstCell='No course available yet' /> 
          :
          listCourses.map((course, index) => {
            return <CourseListRow isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} key={index} />
          })
        }
      </tbody>
    </table>
  );
}

CourseList.PropTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;