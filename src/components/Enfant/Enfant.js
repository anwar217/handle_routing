import React from 'react';
import { useParams } from "react-router-dom";
import Chaussures from "./Chaussures";
import Manteaux from "./Manteaux";
export default function Enfant() {
  const { type } = useParams();
  return (
    <div>
      <h2>Enfant</h2>
      {type === "Chaussures" && <Chaussures />}
      {type === "Manteaux" && <Manteaux />}
    </div>
  );
}