export function getCurrentTimeInUTC(utcTimestamp: number) {
  // 현재 로컬 시간을 가져옵니다.
  const utcDate = new Date(utcTimestamp);
  console.log('utcDate:', utcDate);

  return utcDate;
}

export function formatUTCToCustomString(date: Date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()]; // 0 ~ 11
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0'); // 두 자릿수로 맞춤

  // 일에 대한 접미사 (st, nd, rd, th) 처리
  const daySuffix = getDaySuffix(day);

  return `${month} ${day}${daySuffix} (${hours}:${minutes})`;
}

function getDaySuffix(day: number) {
  if (day > 3 && day < 21) return 'th'; // 11th, 12th, 13th 등은 th로 고정
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
