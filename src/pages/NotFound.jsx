import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // make history using useNavigate
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  );
}
