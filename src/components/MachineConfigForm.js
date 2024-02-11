import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Typography } from "@material-ui/core";

const MachineConfigForm = ({ machine, onSave, onClose }) => {
  const [id] = useState(machine.id);
  const [name] = useState(machine.name);
  const [temperature, setTemperature] = useState(machine.temperature);
  const [stockThreshold, setStockThreshold] = useState(machine.stockThreshold);
  const [operationalHours, setOperationalHours] = useState(
    machine.operationalHours
  );
  const [stockThresholdError, setStockThresholdError] = useState("");
  const [operationalHoursError, setOperationalHoursError] = useState("");

  const isSaveButtonDisabled = Boolean(
    stockThresholdError || operationalHoursError
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Stock Threshold
    if (!/^\d+$/.test(stockThreshold)) {
      setStockThresholdError("Please enter a valid number.");
      return;
    }

    // Validate Operational Hours
    if (!/^\d+(\.\d{1,2})?$/.test(operationalHours)) {
      setOperationalHoursError("Please enter a valid decimal number.");
      return;
    }

    // Reset the error states
    setStockThresholdError("");
    setOperationalHoursError("");

    onSave({
      ...machine,
      temperature,
      stockThreshold,
      operationalHours,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box backgroundColor={"#fff"} paddingTop={"32px"} marginBottom={"16px"}>
        <Box textAlign={"center"} paddingBottom={"8px"}>
          <Typography>
            Config : {id} {name}{" "}
          </Typography>
        </Box>
        <FormControl fullWidth>
          <InputLabel>Temperature</InputLabel>
          <Select
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          >
            <MenuItem value="cold">Cold</MenuItem>
            <MenuItem value="warm">Warm</MenuItem>
            <MenuItem value="hot">Hot</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Stock Threshold"
          value={stockThreshold}
          onChange={(e) => {
            // Validate and update Stock Threshold
            const value = e.target.value;
            setStockThreshold(value);

            // Display error if input is not a number
            if (!/^\d+$/.test(value)) {
              setStockThresholdError("Please enter a valid number.");
            } else {
              setStockThresholdError("");
            }
          }}
          error={Boolean(stockThresholdError)}
          helperText={stockThresholdError}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Operational Hours"
          value={operationalHours}
          onChange={(e) => setOperationalHours(e.target.value)}
          margin="normal"
        />
        <Box className="flex">
          <Button
            style={{ marginRight: "12px" }}
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSaveButtonDisabled}
          >
            Save
          </Button>
          <Button variant="outlined" fullWidth onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  );
};
export default MachineConfigForm;
