exports.handler = async (event) => {
  // 현재 시간 가져오기
  const now = new Date();
  const isoTime = now.toISOString();  // ISO 8601 형식 (UTC)
  const unixTimeMs = now.getTime();   // 밀리초 단위 유닉스 타임스탬프

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // CORS 허용
    },
    body: JSON.stringify({
      time: isoTime,
      milliseconds_since_epoch: unixTimeMs,  // ✅ 밀리초 기준 유닉스 타임스탬프 추가
    }),
  };
};
