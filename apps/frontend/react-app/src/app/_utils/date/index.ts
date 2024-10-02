export function getLocalTimeInUTC(utcTimestamp: number) {
  // 현재 로컬 시간을 가져옵니다.
  const utcDate = new Date(utcTimestamp);
  return utcDate;
}

export function getLocalTimeInTimezone(utcDate: Date, timeZone: string): Date {
  // UTC 시간을 지정된 타임존에 맞춰 변환
  const formatter = new Intl.DateTimeFormat([], {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // 변환된 타임존 시간에 대한 포맷팅된 날짜 문자열 얻기
  const parts = formatter.formatToParts(utcDate);

  // 포맷된 시간 정보를 가져오기
  const year = Number(parts.find((part) => part.type === 'year')?.value);
  const month = Number(parts.find((part) => part.type === 'month')?.value) - 1; // 월은 0부터 시작하므로 -1
  const day = Number(parts.find((part) => part.type === 'day')?.value);
  const hour = Number(parts.find((part) => part.type === 'hour')?.value);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value);
  const second = Number(parts.find((part) => part.type === 'second')?.value);

  // 타임존에 맞춰 조정된 Date 객체 생성
  return new Date(year, month, day, hour, minute, second);
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
