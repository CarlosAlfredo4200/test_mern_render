import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  pieSegment: {
    height: 20,
    width: 20,
    borderRadius: "50%",
    margin: 5,
  },
  label: {
    marginBottom: 5,
  },
});

const PieChartComponentAreas = ({ students, selectedArea }) => {
  const data = students.map((student) => ({
    name: student.nombre,
    value: parseFloat(student[selectedArea]),
  }));

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.name} style={styles.container}>
          <View
            style={[
              styles.pieSegment,
              {
                backgroundColor: "#4682B4",
                width: `${(item.value / total) * 100}px`,
                height: `${(item.value / total) * 100}px`,
              },
            ]}
          />
          <Text style={styles.label}>{item.name}: {item.value.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
};

export default PieChartComponentAreas;

