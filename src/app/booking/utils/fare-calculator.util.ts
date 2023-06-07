const calculateFare = (distance: Number, mileRate: Number): Number => {
  try {
    const basefare = 1;
    const _perM = mileRate;
    return Number(_perM) * Number(distance) + basefare;
  } catch (error) {
    return 0;
  }
};

export default calculateFare;
