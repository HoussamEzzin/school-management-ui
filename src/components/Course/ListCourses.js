import React, {Component} from 'react';
import CourseService from "../../services/CourseService";

class ListCourses extends  Component{

    constructor(props) {
        super(props);

        this.state = {
            courses : []
        }
        this.addCourse = this.addCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    deleteCourse(id){
        CourseService.deleteCourse(id).then( res => {
            this.setState({courses : this.state.courses.filter(course => course.id !== id)});
        });
    }

    viewCourse(id){
        this.props.history.push(`/view-course/${id}`)
    }

    editCourse(id){
        this.props.history.push(`/add-course/${id}`)
    }


    componentDidMount() {
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data})
            console.log("RESPONSE : "+res.data)
        })
    }

    addCourse(){
        this.props.history.push('/add-course/_add')
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Courses List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCourse}> Add Course</button>
                </div>
                <br/>
                <div className="row">
                    <table className="table  table-bordered table-danger">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Level</th>
                                <th>Option</th>
                                <th>Professor Name</th>
                                <th>Exams</th>
                                <th>Classrooms</th>
                                <th>Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.courses.map(
                                course =>
                                    <tr key={course.courseId}>
                                        <td>{course.courseTitle}</td>
                                        <td>{course.courseDescription}</td>
                                        <td>{course.courseLevel}</td>
                                        <td>{course.courseOption}</td>


                                    </tr>
                            )
                        }
                        </tbody>


                    </table>
                </div>
            </div>
        )
    }
}

export default ListCourses;