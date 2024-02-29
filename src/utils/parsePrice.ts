// 숫자만 포함된 문자열로 변환하는 함수 (컴마, 원 제거)
export const parsePrice = (formattedValue: string) => {
  return formattedValue.replace(/[^\d]/g, ""); // 숫자가 아닌 모든 문자 제거
};
