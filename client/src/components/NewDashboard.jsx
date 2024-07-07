import React, { useState, useEffect } from "react";
import BarChartComponent from "./BarChartComponentGrupos";
import { Students } from "../api/DataApi";
import PieChartComponent from "./PieChartComponent";
import NewDatatable from "./NewDatatable";
import MetasGrupo from "./MetasGrupo";
import PromedioGrupos from "./PromedioGrupos";
import Filtros from "./Filtros";
import LoadingSpinner from "./LoadingSpinner"; // Importa el componente LoadingSpinner

const NewDashboard = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [error, setError] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedPeriodo, setSelectedPeriodo] = useState("");
  const [selectedScale, setSelectedScale] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await Students();
        setStudents(data);
        setLoading(false); // Cambia el estado de carga a false cuando se completó la carga
      } catch (error) {
        setError("Error fetching students");
        setLoading(false); // Asegúrate de cambiar el estado de carga en caso de error
      }
    }

    fetchStudents();
  }, []);

  useEffect(() => {
    let filtered = students;

    if (selectedGroup) {
      filtered = filtered.filter(
        (student) => student.grupo.trim() === selectedGroup
      );
    }

    if (selectedPeriodo) {
      filtered = filtered.filter(
        (student) => student.periodo.trim() === selectedPeriodo
      );
    }

    if (selectedScale) {
      filtered = filtered.filter((student) => {
        let group;
        if (student.promedio < 3) {
          group = "DI";
        } else if (student.promedio < 4) {
          group = "BÁSICO";
        } else if (student.promedio < 4.6) {
          group = "DA";
        } else {
          group = "DS";
        }
        return group === selectedScale;
      });
    }

    setFilteredStudents(filtered);
  }, [students, selectedGroup, selectedPeriodo, selectedScale]);

  if (loading) {
    return <LoadingSpinner />; // Muestra el spinner mientras se cargan los datos
  }

  return (
    <div className="dashboard_div">
      <div className="dashboard_div_filtros">
        <Filtros
          selectedPeriodo={selectedPeriodo}
          setSelectedPeriodo={setSelectedPeriodo}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          selectedScale={selectedScale}
          setSelectedScale={setSelectedScale}
        />
        
      </div>

      <div className="graficas_generales">
        <BarChartComponent students={filteredStudents} error={error} />
      </div>

      <div className="prom_tables">
        <div className="box_prom_tables">
           
          <NewDatatable students={filteredStudents} error={error} />
        </div>
        <div className="box_prom_tables">
          <PieChartComponent students={filteredStudents} error={error} />
        </div>
      </div>
      <div>
        <div>
          <MetasGrupo />
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
