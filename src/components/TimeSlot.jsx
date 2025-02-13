import React from "react";

const TimeSlot = ({ time, interviews, onAdd, onEdit, onDelete }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h4 style={styles.time}>{time}</h4>
        <button onClick={() => onAdd(time)} style={styles.addButton}>
          ➕
        </button>
      </div>

      {interviews.map((interview, index) => (
        <div key={index} style={styles.card}>
          <p>
            <b>Interviewer: </b> {interview.interviewer}
          </p>
          <p>
            <b>Candidate: </b> {interview.candidate}
          </p>
          <p>
            <b>Type: </b> {interview.interviewType}
          </p>
          <p>
            <b>Date: </b> {interview.date}
          </p>

          <div style={styles.buttonContainer}>
            <button
              onClick={() => onEdit(time, index)}
              style={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(time, index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// 🎨 CSS Styles
const styles = {
  container: {
    width: "50vw",
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    background: "#f8f9fa",
    marginBottom: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    margin: 0,
    color: "#2c3e50",
    fontWeight: "bold",
  },
  card: {
    height: "auto",
    background: "#ecf0f1",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "10px",
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  addButton: {
    background: "transparent",
    color: "black",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginRight: "20px",
    marginLeft: "20px",
  },
  editButton: {
    background: "transparent",
    color: "black",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "1px solid grey",
    marginRight: "100px",
  },
  deleteButton: {
    background: "transparent",
    color: "black",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "1px solid grey",
  },
};

export default TimeSlot;