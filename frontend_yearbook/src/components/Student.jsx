import StudentsData from "./StudentsData";
import "./StudentStyles.css";
import program_1 from '../assets/program-1.png'
import program_2 from '../assets/program-2.png'
import program_3 from '../assets/program-3.png'
import white_arrow from '../assets/white-arrow.png'
import StudentList from './StudentList'
import StudentForm from './StudentForm'


function Student () {
    return(
        <div className="trip">
            <h1>Meet Our Students</h1>
            <p>Their Year, Their EBook, Their Legacy</p>
            <div className="trip-card">
                <StudentsData
                    image={program_1}
                    heading="John Doe"
                    text="John Doe is a student of Computer Science at the University of California, Berkeley. He is a passionate coder and loves to travel."
                />
                 <StudentsData
                    image={program_2}
                    heading="Jane Doe"
                    text="Jane Doe is a student of Business Administration at the University of California, Berkeley. She is a passionate coder and loves to travel."
                />
                 <StudentsData
                    image={program_3}
                    heading="John Doe"
                    text="John Doe is a student of Computer Science at the University of California, Berkeley. He is a passionate coder and loves to travel."
                />
                <StudentsData
                    image={program_1}
                    heading="John Doe"
                    text="John Doe is a student of Computer Science at the University of California, Berkeley. He is a passionate coder and loves to travel."
                />
                 <StudentsData
                    image={program_2}
                    heading="Jane Doe"
                    text="Jane Doe is a student of Business Administration at the University of California, Berkeley. She is a passionate coder and loves to travel."
                />
                 <StudentsData
                    image={program_3}
                    heading="John Doe"
                    text="John Doe is a student of Computer Science at the University of California, Berkeley. He is a passionate coder and loves to travel."
                />
                <StudentsData
                    image={program_1}
                    heading="John Doe"
                    text="John Doe is a student of Computer Science at the University of California, Berkeley. He is a passionate coder and loves to travel."
                />
                 <StudentsData
                    image={program_2}
                    heading="Jane Doe"
                    text="Jane Doe is a student of Business Administration at the University of California, Berkeley. She is a passionate coder and loves to travel."
                />
                 <StudentsData
                    image={program_3}
                    heading="John Doe"
                    text="John Doe is a student of Computer Science at the University of California, Berkeley. He is a passionate coder and loves to travel."
                />
            </div>
            <StudentForm/>
            <StudentList />
            <button className='dark-btn'>See more here <img src={white_arrow} alt="" /></button>
        </div>
    )
}

export default Student;