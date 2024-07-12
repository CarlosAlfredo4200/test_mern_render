import React from 'react';
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';
import BarChartComponentAreasPDF from "../components/BarChartComponentAreasPDF";
import PieChartComponentAreas from "../components/PieChartComponentAreas";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
  },
  list: {
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 5,
  },
});

const DescargarPdf = ({
  filteredStudents,
  selectedGroup,
  selectedPeriodo,
  selectedArea,
  error,
  groupCounts,
  totalFilteredStudents,
  promedioGeneral,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Informe por Áreas</Text>
        <Text style={styles.subHeader}>Grupo: {selectedGroup}</Text>
        <Text style={styles.subHeader}>Periodo: {selectedPeriodo}</Text>
        <Text style={styles.subHeader}>Promedios por Materia:</Text>
        <BarChartComponentAreasPDF
          students={filteredStudents}
          selectedArea={selectedArea}
          selectedGroup={selectedGroup}
          error={error}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Consolidado de Datos:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Número de estudiantes: {totalFilteredStudents}</Text>
          <Text style={styles.listItem}>Promedio general: {promedioGeneral}</Text>
          <Text style={styles.listItem}>Estudiantes con promedio DI: {groupCounts.DI}</Text>
          <Text style={styles.listItem}>Estudiantes con promedio BÁSICO: {groupCounts.BÁSICO}</Text>
          <Text style={styles.listItem}>Estudiantes con promedio DA: {groupCounts.DA}</Text>
          <Text style={styles.listItem}>Estudiantes con promedio DS: {groupCounts.DS}</Text>
        </View>
        <PieChartComponentAreas
          students={filteredStudents}
          selectedArea={selectedArea}
          error={error}
        />
      </View>
    </Page>
  </Document>
);

export default DescargarPdf;



