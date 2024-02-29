// 숫자에 컴마를 추가하고, 원(₩) 단위를 붙이는 함수
export const formatPrice = (value: string) => {
  const number = value.replace(/\D/g, ""); // 숫자가 아닌 문자 제거
  const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 천 단위마다 컴마 추가
  return `₩  ${formattedNumber}`;
};
