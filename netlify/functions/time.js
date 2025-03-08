exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // CORS 허용
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  };
};
