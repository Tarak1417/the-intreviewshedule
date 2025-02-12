import React, { useState } from "react";

const InterviewForm = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || { interviewer: "", candidate: "", interviewType: "", date: "" }
  );
  const [loading, setLoading] = useState(false); // Loading state
  const [success, setSuccess] = useState(false); // Success state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const{candidate}=formData
    setLoading(true); // Start loading
    alert(`${candidate} slot booked sucessfully`)
    try {
      // Simulate an API call or async operation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      onSubmit(formData); // Submit the form data
      setSuccess(true); // Show success message
      setTimeout(() => {
        setSuccess(false); // Hide success message after 2 seconds
        onClose(); // Close the form
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={styles.header}>
          {initialData ? "Edit Interview" : "Schedule Interview"}
        </h3>

        {/* Interviewer Name */}
        <label style={styles.label}>Interviewer Name</label>
        <input
          type="text"
          name="interviewer"
          placeholder="Enter interviewer name"
          value={formData.interviewer}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Candidate Name */}
        <label style={styles.label}>Candidate Name</label>
        <input
          type="text"
          name="candidate"
          placeholder="Enter candidate name"
          value={formData.candidate}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Interview Type */}
        <label style={styles.label}>Interview Type</label>
        <select
          name="interviewType"
          value={formData.interviewType}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select interview type</option>
          <option value="technical">Technical</option>
          <option value="hr">HR</option>
          <option value="behavioral">Behavioral</option>
        </select>

        {/* Interview Date */}
        <label style={styles.label}>Interview Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button
            onClick={handleSubmit}
            style={styles.submitBtn}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button onClick={onClose} style={styles.cancelBtn}>
            Cancel
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div style={styles.successMessage}>
            🎉 Interview scheduled successfully for {formData.candidate}!
          </div>
        )}
      </div>
    </div>
  );
};

// 🎨 CSS Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    width: "350px",
    textAlign: "center",
    position: "relative",
  },
  header: {
    marginBottom: "15px",
    fontSize: "20px",
    color: "#333",
  },
  label: {
    display: "block",
    textAlign: "left",
    fontSize: "14px",
    margin: "10px 0 5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  select: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  submitBtn: {
    background: "#28a745",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    opacity: 1,
    transition: "opacity 0.3s",
  },
  cancelBtn: {
    background: "#dc3545",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  successMessage: {
    position: "absolute",
    bottom: "-50px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#28a745",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    animation: "fadeIn 0.5s ease-in-out",
  },
};

export default InterviewForm;