import React from "react";
import { Modal } from "@mui/material";
import MachineConfigForm from "./MachineConfigForm";
import { styled } from "@mui/system";
const StyledModalContainer = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "16px",
  borderRadius: "4px",
});

const MachineConfigModal = ({ open, onClose, machine, onSave }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContainer>
        <MachineConfigForm
          machine={machine}
          onSave={onSave}
          onClose={onClose}
        />
      </StyledModalContainer>
    </Modal>
  );
};

export default MachineConfigModal;
