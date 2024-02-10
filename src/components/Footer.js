import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
import { format } from "date-fns";

function Footer() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateCurrentDate = () => {
      const formattedDate = format(new Date(), "EEEE, MMMM d, yyyy");
      setCurrentDate(formattedDate);
    };

    updateCurrentDate();

    const intervalId = setInterval(updateCurrentDate, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="date-section">
        <div id="line"></div></div>
        <p id="date">{currentDate}</p>
    </>
  );
}

export default Footer;
