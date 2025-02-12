import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Scheduler from "./components/Scheduler";

function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelectDay={setSelectedDay} />
      <div style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>
      <Scheduler selectedDay={selectedDay} />
      </div>
    </div>
  );
}

export default App;
