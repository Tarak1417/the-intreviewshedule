import React, { useState, useEffect } from "react";
import TimeSlot from "./TimeSlot";
import InterviewForm from "./InterviewForm";

const Scheduler = ({ selectedDay }) => {
  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"];
  const [interviews, setInterviews] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedInterviews = JSON.parse(localStorage.getItem("interviews")) || {};
    setInterviews(savedInterviews);
  }, []);

  // Save data to localStorage whenever interviews change
  useEffect(() => {
    localStorage.setItem("interviews", JSON.stringify(interviews));
  }, [interviews]);

  const addInterview = (time) => {
    setSelectedSlot(time);
    setEditIndex(null);
  };

  const editInterview = (time, index) => {
    setSelectedSlot(time);
    setEditIndex(index);
  };

  const deleteInterview = (time, index) => {
    setInterviews((prev) => {
      const updated = { ...prev };
      if (updated[selectedDay] && updated[selectedDay][time]) {
        updated[selectedDay][time] = updated[selectedDay][time].filter((_, i) => i !== index);
      }
      return updated;
    });
  };

  const handleFormSubmit = (formData) => {
    setInterviews((prev) => {
      const updated = { ...prev };
      if (!updated[selectedDay]) {
        updated[selectedDay] = {};
      }
      if (!updated[selectedDay][selectedSlot]) {
        updated[selectedDay][selectedSlot] = [];
      }
      if (editIndex !== null) {
        updated[selectedDay][selectedSlot][editIndex] = formData;
      } else {
        updated[selectedDay][selectedSlot] = [
          ...updated[selectedDay][selectedSlot],
          formData,
        ];
      }
      return updated;
    });
    setSelectedSlot(null);
  };

  return (
    <div
      style={{
        marginLeft: "500px",
        padding: "20px",
        gap: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>{selectedDay || "Select a Day"}</h2>
      {timeSlots.map((time) => (
        <TimeSlot
          key={time}
          time={time}
          interviews={
            (interviews[selectedDay] && interviews[selectedDay][time]) || []
          }
          onAdd={addInterview}
          onEdit={editInterview}
          onDelete={deleteInterview}
        />
      ))}
      {selectedSlot && (
        <InterviewForm
          onClose={() => setSelectedSlot(null)}
          onSubmit={handleFormSubmit}
          initialData={
            editIndex !== null
              ? interviews[selectedDay][selectedSlot][editIndex]
              : null
          }
        />
      )}
    </div>
  );
};

export default Scheduler;