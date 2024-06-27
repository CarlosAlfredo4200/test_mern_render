import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ students, error }) => {
  // Filtrar estudiantes y agrupar por promedio según los criterios
  const groupedData = students.reduce((accumulator, student) => {
    let group;
    if (student.promedio < 3) {
      group = 'DI';
    } else if (student.promedio < 4) {
      group = 'BÁSICO';
    } else if (student.promedio < 4.6) {
      group = 'DA';
    } else {
      group = 'DS';
    }

    accumulator[group] = (accumulator[group] || 0) + 1;
    return accumulator;
  }, {});

  // Calcular el número total de estudiantes
  const totalStudents = Object.values(groupedData).reduce((total, value) => total + value, 0);

  // Formatear datos para Recharts, incluyendo el porcentaje y la cantidad
  const data = Object.keys(groupedData).map(group => ({
    name: group,
    value: groupedData[group],
    percentage: ((groupedData[group] / totalStudents) * 100).toFixed(0),
    count: groupedData[group] // Agregar la cantidad correspondiente a cada categoría
  }));

  // Colores para las secciones de la gráfica
  const colors = ['#FE0211', '#6C69AC', '#0247FE', '#7cfc00'];

  return (
    <div className="pie-chart-container">
      <ResponsiveContainer width="100%" height={230}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={20}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={6}
            dataKey="value"
            label={({ name, percentage, count }) => `${count} ${name} (${percentage}%)`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
       
      {error && (
        <div className="error-row">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PieChartComponent;
