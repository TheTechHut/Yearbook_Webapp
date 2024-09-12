import "./StudentStyles.css";

function StudentsData({ image, heading, text }) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={image} alt="Student" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
}

export default StudentsData;
