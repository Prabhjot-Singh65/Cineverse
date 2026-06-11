import { useNavigate } from "react-router-dom";

export default function Booking() {
  const navigate = useNavigate();

  const theatres = [
    {
      name: "PVR Elante",
      timings: ["02:30 PM", "04:10 PM", "06:30 PM"]
    },
    {
      name: "PVR Mohali",
      timings: ["03:00 PM", "05:30 PM", "08:00 PM"]
    },
    {
      name: "Piccadily Square",
      timings: ["02:15 PM", "06:00 PM"]
    }
  ];

  const handleBooking = (time) => {
    navigate("/seats", {
      state: { showTime: time }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select Theatre & Show Time</h1>

      {theatres.map((theatre, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          <h3>{theatre.name}</h3>

          {theatre.timings.map((time) => (
            <button
              key={time}
              onClick={() => handleBooking(time)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                border: "2px solid green"
              }}
            >
              {time}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}