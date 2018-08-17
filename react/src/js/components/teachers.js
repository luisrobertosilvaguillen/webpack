import React, { Component } from 'react';
import Teacher from './teacher.js';

class Teachers extends Component{
    render(){
        return(
            <div>
                <ul className="Teachers">
                {
                    this.props.data.teachers.map((teacherData) => {
                      return <Teacher {...teacherData}  />
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Teachers;