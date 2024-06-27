// frontend/src/components/PromedioGrupos.jsx
import React from "react";

const PromedioGrupos = ({ students }) => {
  const totalStudents = students.length;
  const totalPromedio = students.reduce(
    (acc, student) => acc + parseFloat(student.promedio),
    0
  );
  const promedioGeneral =
    totalStudents > 0 ? (totalPromedio / totalStudents).toFixed(1) : 0;

  return (
    <div>
      <div className="promedio_grupos">
        <h1>{promedioGeneral}</h1>
        <p>Promedios</p>
      </div>
      <div className="promedio_grupos">
        <h1>{students.length}</h1>
        <p>N° Estudiantes</p>
      </div>
    </div>
  );
};

export default PromedioGrupos;
