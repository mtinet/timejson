exports.handler = async (event) => {
  // 현재 UTC 시간 가져오기
  const now = new Date();
  const isoTime = now.toISOString();  // ISO 8601 형식 (UTC)
  const unixTimeMs = now.getTime();   // 밀리초 단위 유닉스 타임스탬프
  const dateStr = isoTime.split("T")[0];  // YYYY-MM-DD 형식

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // CORS 허용
    },
    body: JSON.stringify({
      time: isoTime,
      milliseconds_since_epoch: unixTimeMs,
      date: dateStr  // ✅ YYYY-MM-DD 형식 추가
    }),
  };
};
