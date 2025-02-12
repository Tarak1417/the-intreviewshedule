import React from "react";

const Sidebar = ({ onSelectDay }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div style={{ width: "200px", height: "100vh", background: "#34495e", color: "white", padding: "20px", position: "fixed", top: 0, left: 0 }}>
      <h3>Schedule</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {days.map((day) => (
          <li key={day} onClick={() => onSelectDay(day)} style={{ cursor: "pointer", padding: "50px",gap:"50px", borderBottom: "1px solid white" }}>
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
