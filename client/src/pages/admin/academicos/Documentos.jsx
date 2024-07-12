import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Students } from "../../../api/DataApi";
import LoadingSpinner from "../../../components/LoadingSpinner";
import FiltrosAreasDocumentos from "../../../components/FiltrosAreasDocumentos";
import DescargarPdf from "../../../components/DescargarPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Documentos = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [error, setError] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState("1. A");
  const [selectedPeriodo, setSelectedPeriodo] = useState("PERIODO 1");
  const [selectedScale, setSelectedScale] = useState("");
  const [selectedArea, setSelectedArea] = useState("ciencias_naturales");
  const [loading, setLoading] = useState(true);
  const [groupCounts, setGroupCounts] = useState({
    DI: 0,
    BÁSICO: 0,
    DA: 0,
    DS: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await Students();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching students");
        setLoading(false);
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
        const value = parseFloat(student[selectedArea]);
        let group;
        if (value < 3) {
          group = "DI";
        } else if (value < 4) {
          group = "BÁSICO";
        } else if (value < 4.6) {
          group = "DA";
        } else {
          group = "DS";
        }
        return group === selectedScale;
      });
    }

    if (selectedArea) {
      filtered = filtered.filter(
        (student) => student[selectedArea] !== undefined
      );
    }

    setFilteredStudents(filtered);

    const counts = { DI: 0, BÁSICO: 0, DA: 0, DS: 0 };
    filtered.forEach((student) => {
      const value = parseFloat(student[selectedArea]);
      if (value < 3) {
        counts.DI++;
      } else if (value < 4) {
        counts.BÁSICO++;
      } else if (value < 4.6) {
        counts.DA++;
      } else {
        counts.DS++;
      }
    });
    setGroupCounts(counts);
  }, [students, selectedGroup, selectedPeriodo, selectedScale, selectedArea]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const totalFilteredStudents = filteredStudents.length;
  const totalFilteredPromedio = filteredStudents.reduce(
    (acc, student) => acc + parseFloat(student.promedio),
    0
  );
  const promedioGeneral =
    totalFilteredStudents > 0
      ? (totalFilteredPromedio / totalFilteredStudents).toFixed(1)
      : 0;

  return (
    <div className="dashboard_div-doc">
      <div className="dashboard_div_filtros">
        <FiltrosAreasDocumentos
          selectedPeriodo={selectedPeriodo}
          setSelectedPeriodo={setSelectedPeriodo}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          selectedScale={selectedScale}
          setSelectedScale={setSelectedScale}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
        />
      </div>
      <DescargarPdf
            filteredStudents={filteredStudents}
            selectedGroup={selectedGroup}
            selectedPeriodo={selectedPeriodo}
            selectedArea={selectedArea}
            error={error}
            groupCounts={groupCounts}
            totalFilteredStudents={totalFilteredStudents}
            promedioGeneral={promedioGeneral}
          />

      {/* <PDFDownloadLink
        document={
          <DescargarPdf
            filteredStudents={filteredStudents}
            selectedGroup={selectedGroup}
            selectedPeriodo={selectedPeriodo}
            selectedArea={selectedArea}
            error={error}
            groupCounts={groupCounts}
            totalFilteredStudents={totalFilteredStudents}
            promedioGeneral={promedioGeneral}
          />
        }
        fileName="Informe_por_areas.pdf"
      >
        {({ loading }) =>
          loading ? <button>Cargando...</button> : <button>Descargar PDF</button>
        }
      </PDFDownloadLink> */}
    </div>
  );
};

export default Documentos;

