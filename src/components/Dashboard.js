// src/components/Dashboard.js
import React from "react";
import {
  Paper,
} from "@material-ui/core";
import {Typography, Container, Grid, Chip ,} from '@mui/material';
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import mockMachineData from "../data/mockData";
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {
  // Extract data for charts
  const labels = mockMachineData.map((machine) => `${machine.name}`);
  const salesData = mockMachineData.map((machine) =>
    parseInt(machine.currentSales.slice(1))
  );
  const alertsData = mockMachineData.map((machine) =>
    machine.alerts === "None" ? 0 : 1
  );

   const uptimeData = mockMachineData.map((machine) =>
  parseInt(machine.uptime)
);


  // Data for Pie Chart
  const pieChartData = {
    labels,
    datasets: [
      {
        data: salesData,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
        ],
      },
    ],
  };
  // Options for Pie Chart
  const pieChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: $${value}`;
          },
        },
      },
    },
  };

  const uptimeChartData = {
    labels,
    datasets: [
      {
        label: "Uptime (Hours)",
        backgroundColor: "#4CAF50",
        data: uptimeData,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
        ],
      },
    ],
  };
  // Columns for Data Table
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'stock', headerName: 'Stock', width: 150 },
    { field: 'uptime', headerName: 'Uptime', width: 328 },
    { field: 'currentSales', headerName: 'Current Sales', width: 328 },
    {
      field: 'alerts',
      headerName: 'Alerts',
      width: 168,
      renderCell: (params) => (
        <AlertCell value={params.value} />
      ),
    },
  ];

  // Rows for Data Table
  const rows = mockMachineData.map((machine) => ({
    id: machine.id,
    name: machine.name,
    stock : machine.stock,
    uptime: machine.uptime,
    currentSales: machine.currentSales,
    alerts: machine.alerts,
  }));

  // Custom cell renderer for Alerts column
  const AlertCell = ({ value }) => {
    let chipColor = '';
    let textColor = '';

    if (value === 'Low stock') {
      chipColor = '#E30E0E';
      textColor = 'white';
    } else if (value === 'None') {
      chipColor = '';
      textColor = 'white';
    } else if (value === 'Under maintenance') {
      chipColor = '#FFC330';
      textColor = 'white';
    } else if (value === 'Active') {
      chipColor = '#4EB800';
      textColor = 'white';
    }
    return (
      <Chip
        label={value}
        style={{ backgroundColor: chipColor, color: textColor }}
      />
    );
  };


  


  return (
    <div>
      <Container className="flex col-span-2 gap-8 justify-center pb-8">
      <Grid item xs={12} md={6}>
        <Paper className="justify-center m-8 shadow-none">
          <Typography variant="h6" style={{paddingTop:'24px', textAlign: 'center' ,}} gutterBottom>
            Pie Chart (Current Sales)
          </Typography>
          <Pie data={pieChartData} options={pieChartOptions}/>
        </Paper>
      </Grid>
      <Grid item xs={12}>
      <Paper className="justify-center m-8 shadow-none">
          <Typography variant="h6" style={{paddingTop:'24px', textAlign: 'center'}} gutterBottom>
            Bar Chart (Uptime)
          </Typography>
          <Bar data={uptimeChartData} className="m-8" />
        </Paper>
      </Grid>
      </Container>
      <Grid item xs={12} md={12}>
        <Paper style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </Paper>
      </Grid>
    </div>
  );
};

export default Dashboard;
