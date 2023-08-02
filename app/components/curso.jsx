import React from "react";

export default function Curso({ curso }) {
  console.log(curso);
  return (
    <div>
      <h2 className="contenido"></h2>
      <div className="curso">{curso.name}</div>
    </div>
  );
}
