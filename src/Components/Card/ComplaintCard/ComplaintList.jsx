import React, { useEffect, useState } from "react";
import ComplaintCard from "./ComplaintCard";
import { fetchComplaints } from "Apis/getDenuncias";

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const complaintsData = await fetchComplaints();
      setComplaints(complaintsData);
    };

    fetchData();
  }, []);

  return (
    <div className="denuncias-list">
      {complaints.map((complaint) => (
        <ComplaintCard key={complaint.id} complaint={complaint} />
      ))}
    </div>
  );
};

export default ComplaintList;
