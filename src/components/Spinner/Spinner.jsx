import "./Spinner.css";

import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <CircularProgress
        size={70}
        thickness={4}
        color="success"
      />
    </div>
  );
}