import { React } from "react";
import { useState } from "react";

const ComplaintCard = ({ complaint }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };

    

  return (
    <div className="card-complaints">
      
      <img src={complaint.img} alt={complaint.title} />
      <h3>{complaint.title}</h3>

      {showFullDescription ? (
          <p>{complaint.description}</p>
        ) : (
          <p>{complaint.description.slice(0, 150)}...</p>
        )}
        <button onClick={toggleDescription}>
          {showFullDescription ? "Leer Menos" : "Leer Más..."}
        </button>
      
       
      
    </div>
  );
};

export default ComplaintCard;
