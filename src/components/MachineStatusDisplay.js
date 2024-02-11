// src\components\MachineStatusDisplay.js
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getMachines } from "../services/machines.service";
import MachineConfigModal from "./MachineConfigModal";

const MachineStatusDisplay = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [machines, setMachines] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const machinesData = await getMachines();
      setMachines(machinesData);
    };

    fetchData();
  }, []);

  const handleEdit = (machine) => {
    setSelectedMachine(machine);
    setModalOpen(true); // Open the modal when Edit is clicked
  };

  const handleSave = (updatedMachine) => {
    // Update the machine data in the local array
    const machineIndex = machines.findIndex((m) => m.id === updatedMachine.id);
    machines[machineIndex] = updatedMachine;

    // Reset the selected machine and close the modal
    setSelectedMachine(null);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedMachine(null);
    setModalOpen(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Machine ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Temperature</TableCell>
              <TableCell>Stock Threshold</TableCell>
              <TableCell>Operational Hours</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {machines.map((machine) => (
              <TableRow key={machine.id}>
                <TableCell>{machine.id}</TableCell>
                <TableCell>{machine.name}</TableCell>
                <TableCell>{machine.temperature}</TableCell>
                <TableCell>{machine.stockThreshold}</TableCell>
                <TableCell>{machine.operationalHours}</TableCell>
                <TableCell>
                  <button onClick={() => handleEdit(machine)}>Edit</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MachineConfigModal
        open={modalOpen}
        onClose={handleCloseModal}
        machine={selectedMachine}
        onSave={handleSave}
      />
    </div>
  );
};

export default MachineStatusDisplay;
