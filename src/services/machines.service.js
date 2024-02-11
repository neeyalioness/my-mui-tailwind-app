// service/machines.service.js

export const getMachines = async () => {
    const response = await import('../data/machines.js');
    return response.default;
  };

  export const getMockData = async () => {
    const response = await import('../data/mockData.js');
    return response.default;
  };