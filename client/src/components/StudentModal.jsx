import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

Modal.setAppElement('#root'); // Establece el elemento de la aplicación para la accesibilidad

const StudentModal = ({ isOpen, onRequestClose, student, selectedArea, updateObservations }) => {
  const [observaciones, setObservaciones] = useState(student?.observaciones || '');
  const [metas, setMetas] = useState(student?.metas || '');
  const [repNivelacion, setRepNivelacion] = useState(student?.reporte_nivelacion || '');

  useEffect(() => {
    if (student) {
      setObservaciones(student.observaciones || '');
      setMetas(student.metas || '');
      setRepNivelacion(student.reporte_nivelacion || '');
    }
  }, [student]);

  const handleSave = () => {
    updateObservations(student._id, observaciones, metas, repNivelacion);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalle del Estudiante"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-header">
        <h2>{student?.nombre}</h2>
        <button onClick={onRequestClose}><FaTimes /></button>
      </div>
      <div className="modal-body">
        <p>Periodo: {student?.periodo}</p>
        <p>Área: {selectedArea}</p>
        <label>
          Observaciones:
          <textarea
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </label>
        <label>
          Metas:
          <textarea
            value={metas}
            onChange={(e) => setMetas(e.target.value)}
          />
        </label>
        <label>
          Reporte de nivelación:
          <textarea
            value={repNivelacion}
            onChange={(e) => setRepNivelacion(e.target.value)}
          />
        </label>
      </div>
      <div className="modal-footer">
        <button onClick={handleSave}>Guardar</button>
      </div>
    </Modal>
  );
};

export default StudentModal;
