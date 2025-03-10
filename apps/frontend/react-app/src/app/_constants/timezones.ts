export interface IanaTimezone {
  group: string;
  timezone: string;
  label: string;
}

export const IANA_TIMEZONES = [
  // UTC+14:00
  {
    group: 'UTC+14:00',
    timezone: 'Pacific/Kiritimati',
    label: 'Pacific/Kiritimati (+14)',
  },
  // UTC+13:00
  { group: 'UTC+13:00', timezone: 'Pacific/Apia', label: 'Pacific/Apia (+13)' },
  {
    group: 'UTC+13:00',
    timezone: 'Pacific/Enderbury',
    label: 'Pacific/Enderbury (+13)',
  },
  {
    group: 'UTC+13:00',
    timezone: 'Pacific/Fakaofo',
    label: 'Pacific/Fakaofo (+13)',
  },
  {
    group: 'UTC+13:00',
    timezone: 'Pacific/Tongatapu',
    label: 'Pacific/Tongatapu (+13)',
  },
  // UTC+12:45
  {
    group: 'UTC+12:45',
    timezone: 'Pacific/Chatham',
    label: 'Pacific/Chatham (+12:45)',
  },
  // UTC+12:00
  {
    group: 'UTC+12:00',
    timezone: 'Antarctica/McMurdo',
    label: 'Antarctica/McMurdo (NZST)',
  },
  { group: 'UTC+12:00', timezone: 'Asia/Anadyr', label: 'Asia/Anadyr (+12)' },
  {
    group: 'UTC+12:00',
    timezone: 'Asia/Kamchatka',
    label: 'Asia/Kamchatka (+12)',
  },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Auckland',
    label: 'Pacific/Auckland (NZST)',
  },
  { group: 'UTC+12:00', timezone: 'Pacific/Fiji', label: 'Pacific/Fiji (+12)' },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Funafuti',
    label: 'Pacific/Funafuti (+12)',
  },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Kwajalein',
    label: 'Pacific/Kwajalein (+12)',
  },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Majuro',
    label: 'Pacific/Majuro (+12)',
  },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Nauru',
    label: 'Pacific/Nauru (+12)',
  },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Tarawa',
    label: 'Pacific/Tarawa (+12)',
  },
  { group: 'UTC+12:00', timezone: 'Pacific/Wake', label: 'Pacific/Wake (+12)' },
  {
    group: 'UTC+12:00',
    timezone: 'Pacific/Wallis',
    label: 'Pacific/Wallis (+12)',
  },
  // UTC+11:00
  {
    group: 'UTC+11:00',
    timezone: 'Antarctica/Casey',
    label: 'Antarctica/Casey (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Antarctica/Macquarie',
    label: 'Antarctica/Macquarie (+11)',
  },
  { group: 'UTC+11:00', timezone: 'Asia/Magadan', label: 'Asia/Magadan (+11)' },
  {
    group: 'UTC+11:00',
    timezone: 'Asia/Sakhalin',
    label: 'Asia/Sakhalin (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Asia/Srednekolymsk',
    label: 'Asia/Srednekolymsk (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Bougainville',
    label: 'Pacific/Bougainville (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Efate',
    label: 'Pacific/Efate (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Guadalcanal',
    label: 'Pacific/Guadalcanal (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Kosrae',
    label: 'Pacific/Kosrae (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Norfolk',
    label: 'Pacific/Norfolk (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Noumea',
    label: 'Pacific/Noumea (+11)',
  },
  {
    group: 'UTC+11:00',
    timezone: 'Pacific/Pohnpei',
    label: 'Pacific/Pohnpei (+11)',
  },
  // UTC+10:30
  {
    group: 'UTC+10:30',
    timezone: 'Australia/Lord_Howe',
    label: 'Australia/Lord Howe (+10:30)',
  },
  // UTC+10:00
  {
    group: 'UTC+10:00',
    timezone: 'Antarctica/DumontDUrville',
    label: 'Antarctica/DumontDUrville (+10)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Asia/Ust-Nera',
    label: 'Asia/Ust-Nera (+10)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Asia/Vladivostok',
    label: 'Asia/Vladivostok (+10)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Australia/Brisbane',
    label: 'Australia/Brisbane (AEST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Australia/Currie',
    label: 'Australia/Currie (AEST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Australia/Hobart',
    label: 'Australia/Hobart (AEST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Australia/Lindeman',
    label: 'Australia/Lindeman (AEST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Australia/Melbourne',
    label: 'Australia/Melbourne (AEST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Australia/Sydney',
    label: 'Australia/Sydney (AEST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Pacific/Chuuk',
    label: 'Pacific/Chuuk (+10)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Pacific/Guam',
    label: 'Pacific/Guam (ChST)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Pacific/Port_Moresby',
    label: 'Pacific/Port Moresby (+10)',
  },
  {
    group: 'UTC+10:00',
    timezone: 'Pacific/Saipan',
    label: 'Pacific/Saipan (ChST)',
  },
  // UTC+09:30
  {
    group: 'UTC+09:30',
    timezone: 'Australia/Adelaide',
    label: 'Australia/Adelaide (ACST)',
  },
  {
    group: 'UTC+09:30',
    timezone: 'Australia/Broken_Hill',
    label: 'Australia/Broken Hill (ACST)',
  },
  {
    group: 'UTC+09:30',
    timezone: 'Australia/Darwin',
    label: 'Australia/Darwin (ACST)',
  },
  // UTC+09:00
  { group: 'UTC+09:00', timezone: 'Asia/Chita', label: 'Asia/Chita (+09)' },
  { group: 'UTC+09:00', timezone: 'Asia/Dili', label: 'Asia/Dili (+09)' },
  {
    group: 'UTC+09:00',
    timezone: 'Asia/Jayapura',
    label: 'Asia/Jayapura (WIT)',
  },
  {
    group: 'UTC+09:00',
    timezone: 'Asia/Khandyga',
    label: 'Asia/Khandyga (+09)',
  },
  { group: 'UTC+09:00', timezone: 'Asia/Seoul', label: 'Asia/Seoul (KST)' },
  { group: 'UTC+09:00', timezone: 'Asia/Tokyo', label: 'Asia/Tokyo (JST)' },
  { group: 'UTC+09:00', timezone: 'Asia/Yakutsk', label: 'Asia/Yakutsk (+09)' },
  {
    group: 'UTC+09:00',
    timezone: 'Pacific/Palau',
    label: 'Pacific/Palau (+09)',
  },
  // UTC+08:45
  {
    group: 'UTC+08:45',
    timezone: 'Australia/Eucla',
    label: 'Australia/Eucla (+08:45)',
  },
  // UTC+08:30
  {
    group: 'UTC+08:30',
    timezone: 'Asia/Pyongyang',
    label: 'Asia/Pyongyang (KST)',
  },
  // UTC+08:00
  { group: 'UTC+08:00', timezone: 'Asia/Brunei', label: 'Asia/Brunei (+08)' },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Choibalsan',
    label: 'Asia/Choibalsan (+08)',
  },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Hong_Kong',
    label: 'Asia/Hong Kong (HKT)',
  },
  { group: 'UTC+08:00', timezone: 'Asia/Irkutsk', label: 'Asia/Irkutsk (+08)' },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Kuala_Lumpur',
    label: 'Asia/Kuala Lumpur (+08)',
  },
  { group: 'UTC+08:00', timezone: 'Asia/Kuching', label: 'Asia/Kuching (+08)' },
  { group: 'UTC+08:00', timezone: 'Asia/Macau', label: 'Asia/Macau (CST)' },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Makassar',
    label: 'Asia/Makassar (WITA)',
  },
  { group: 'UTC+08:00', timezone: 'Asia/Manila', label: 'Asia/Manila (+08)' },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Shanghai',
    label: 'Asia/Shanghai (CST)',
  },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Singapore',
    label: 'Asia/Singapore (+08)',
  },
  { group: 'UTC+08:00', timezone: 'Asia/Taipei', label: 'Asia/Taipei (CST)' },
  {
    group: 'UTC+08:00',
    timezone: 'Asia/Ulaanbaatar',
    label: 'Asia/Ulaanbaatar (+08)',
  },
  {
    group: 'UTC+08:00',
    timezone: 'Australia/Perth',
    label: 'Australia/Perth (AWST)',
  },
  // UTC+07:00
  {
    group: 'UTC+07:00',
    timezone: 'Antarctica/Davis',
    label: 'Antarctica/Davis (+07)',
  },
  { group: 'UTC+07:00', timezone: 'Asia/Bangkok', label: 'Asia/Bangkok (+07)' },
  { group: 'UTC+07:00', timezone: 'Asia/Barnaul', label: 'Asia/Barnaul (+07)' },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Ho_Chi_Minh',
    label: 'Asia/Ho Chi Minh (+07)',
  },
  { group: 'UTC+07:00', timezone: 'Asia/Hovd', label: 'Asia/Hovd (+07)' },
  { group: 'UTC+07:00', timezone: 'Asia/Jakarta', label: 'Asia/Jakarta (WIB)' },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Krasnoyarsk',
    label: 'Asia/Krasnoyarsk (+07)',
  },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Novokuznetsk',
    label: 'Asia/Novokuznetsk (+07)',
  },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Novosibirsk',
    label: 'Asia/Novosibirsk (+07)',
  },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Phnom_Penh',
    label: 'Asia/Phnom_Penh (+07)',
  },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Pontianak',
    label: 'Asia/Pontianak (WIB)',
  },
  { group: 'UTC+07:00', timezone: 'Asia/Tomsk', label: 'Asia/Tomsk (+07)' },
  {
    group: 'UTC+07:00',
    timezone: 'Asia/Vientiane',
    label: 'Asia/Vientiane (+07)',
  },
  {
    group: 'UTC+07:00',
    timezone: 'Indian/Christmas',
    label: 'Indian/Christmas (+07)',
  },
  // UTC+06:30
  {
    group: 'UTC+06:30',
    timezone: 'Asia/Yangon',
    label: 'Asia/Yangon (+06:30)',
  },
  {
    group: 'UTC+06:30',
    timezone: 'Indian/Cocos',
    label: 'Indian/Cocos (+06:30)',
  },
  // UTC+06:00
  {
    group: 'UTC+06:00',
    timezone: 'Antarctica/Vostok',
    label: 'Antarctica/Vostok (+06)',
  },
  { group: 'UTC+06:00', timezone: 'Asia/Almaty', label: 'Asia/Almaty (+06)' },
  { group: 'UTC+06:00', timezone: 'Asia/Bishkek', label: 'Asia/Bishkek (+06)' },
  { group: 'UTC+06:00', timezone: 'Asia/Dhaka', label: 'Asia/Dhaka (+06)' },
  { group: 'UTC+06:00', timezone: 'Asia/Omsk', label: 'Asia/Omsk (+06)' },
  {
    group: 'UTC+06:00',
    timezone: 'Asia/Qyzylorda',
    label: 'Asia/Qyzylorda (+06)',
  },
  { group: 'UTC+06:00', timezone: 'Asia/Thimphu', label: 'Asia/Thimphu (+06)' },
  { group: 'UTC+06:00', timezone: 'Asia/Urumqi', label: 'Asia/Urumqi (+06)' },
  {
    group: 'UTC+06:00',
    timezone: 'Indian/Chagos',
    label: 'Indian/Chagos (+06)',
  },
  // UTC+05:45
  {
    group: 'UTC+05:45',
    timezone: 'Asia/Kathmandu',
    label: 'Asia/Kathmandu (+05:45)',
  },
  // UTC+05:30
  {
    group: 'UTC+05:30',
    timezone: 'Asia/Colombo',
    label: 'Asia/Colombo (+05:30)',
  },
  { group: 'UTC+05:30', timezone: 'Asia/Kolkata', label: 'Asia/Kolkata (IST)' },
  // UTC+05:00
  {
    group: 'UTC+05:00',
    timezone: 'Antarctica/Mawson',
    label: 'Antarctica/Mawson (+05)',
  },
  { group: 'UTC+05:00', timezone: 'Asia/Aqtau', label: 'Asia/Aqtau (+05)' },
  { group: 'UTC+05:00', timezone: 'Asia/Aqtobe', label: 'Asia/Aqtobe (+05)' },
  {
    group: 'UTC+05:00',
    timezone: 'Asia/Ashgabat',
    label: 'Asia/Ashgabat (+05)',
  },
  { group: 'UTC+05:00', timezone: 'Asia/Atyrau', label: 'Asia/Atyrau (+05)' },
  {
    group: 'UTC+05:00',
    timezone: 'Asia/Dushanbe',
    label: 'Asia/Dushanbe (+05)',
  },
  { group: 'UTC+05:00', timezone: 'Asia/Karachi', label: 'Asia/Karachi (PKT)' },
  { group: 'UTC+05:00', timezone: 'Asia/Oral', label: 'Asia/Oral (+05)' },
  {
    group: 'UTC+05:00',
    timezone: 'Asia/Samarkand',
    label: 'Asia/Samarkand (+05)',
  },
  {
    group: 'UTC+05:00',
    timezone: 'Asia/Tashkent',
    label: 'Asia/Tashkent (+05)',
  },
  {
    group: 'UTC+05:00',
    timezone: 'Asia/Yekaterinburg',
    label: 'Asia/Yekaterinburg (+05)',
  },
  {
    group: 'UTC+05:00',
    timezone: 'Indian/Kerguelen',
    label: 'Indian/Kerguelen (+05)',
  },
  {
    group: 'UTC+05:00',
    timezone: 'Indian/Maldives',
    label: 'Indian/Maldives (+05)',
  },
  // UTC+04:30
  { group: 'UTC+04:30', timezone: 'Asia/Kabul', label: 'Asia/Kabul (+04:30)' },
  {
    group: 'UTC+04:30',
    timezone: 'Asia/Tehran',
    label: 'Asia/Tehran (+04:30)',
  },
  // UTC+04:00
  { group: 'UTC+04:00', timezone: 'Asia/Baku', label: 'Asia/Baku (+04)' },
  { group: 'UTC+04:00', timezone: 'Asia/Dubai', label: 'Asia/Dubai (+04)' },
  { group: 'UTC+04:00', timezone: 'Asia/Muscat', label: 'Asia/Muscat (+04)' },
  { group: 'UTC+04:00', timezone: 'Asia/Tbilisi', label: 'Asia/Tbilisi (+04)' },
  { group: 'UTC+04:00', timezone: 'Asia/Yerevan', label: 'Asia/Yerevan (+04)' },
  {
    group: 'UTC+04:00',
    timezone: 'Europe/Astrakhan',
    label: 'Europe/Astrakhan (+04)',
  },
  {
    group: 'UTC+04:00',
    timezone: 'Europe/Samara',
    label: 'Europe/Samara (+04)',
  },
  {
    group: 'UTC+04:00',
    timezone: 'Europe/Saratov',
    label: 'Europe/Saratov (+04)',
  },
  {
    group: 'UTC+04:00',
    timezone: 'Europe/Ulyanovsk',
    label: 'Europe/Ulyanovsk (+04)',
  },
  { group: 'UTC+04:00', timezone: 'Indian/Mahe', label: 'Indian/Mahe (+04)' },
  {
    group: 'UTC+04:00',
    timezone: 'Indian/Mauritius',
    label: 'Indian/Mauritius (+04)',
  },
  {
    group: 'UTC+04:00',
    timezone: 'Indian/Reunion',
    label: 'Indian/Reunion (+04)',
  },
  // UTC+03:00
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Addis_Ababa',
    label: 'Africa/Addis Ababa (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Asmara',
    label: 'Africa/Asmara (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Dar_es_Salaam',
    label: 'Africa/Dar es Salaam (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Djibouti',
    label: 'Africa/Djibouti (EAT)',
  },
  { group: 'UTC+03:00', timezone: 'Africa/Juba', label: 'Africa/Juba (EAT)' },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Kampala',
    label: 'Africa/Kampala (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Khartoum',
    label: 'Africa/Khartoum (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Mogadishu',
    label: 'Africa/Mogadishu (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Africa/Nairobi',
    label: 'Africa/Nairobi (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Antarctica/Syowa',
    label: 'Antarctica/Syowa (+03)',
  },
  { group: 'UTC+03:00', timezone: 'Asia/Aden', label: 'Asia/Aden (+03)' },
  { group: 'UTC+03:00', timezone: 'Asia/Amman', label: 'Asia/Amman (EEST)' },
  { group: 'UTC+03:00', timezone: 'Asia/Baghdad', label: 'Asia/Baghdad (+03)' },
  { group: 'UTC+03:00', timezone: 'Asia/Bahrain', label: 'Asia/Bahrain (+03)' },
  { group: 'UTC+03:00', timezone: 'Asia/Beirut', label: 'Asia/Beirut (EEST)' },
  {
    group: 'UTC+03:00',
    timezone: 'Asia/Damascus',
    label: 'Asia/Damascus (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Asia/Famagusta',
    label: 'Asia/Famagusta (+03)',
  },
  { group: 'UTC+03:00', timezone: 'Asia/Gaza', label: 'Asia/Gaza (EEST)' },
  { group: 'UTC+03:00', timezone: 'Asia/Hebron', label: 'Asia/Hebron (EEST)' },
  {
    group: 'UTC+03:00',
    timezone: 'Asia/Jerusalem',
    label: 'Asia/Jerusalem (IDT)',
  },
  { group: 'UTC+03:00', timezone: 'Asia/Kuwait', label: 'Asia/Kuwait (+03)' },
  {
    group: 'UTC+03:00',
    timezone: 'Asia/Nicosia',
    label: 'Asia/Nicosia (EEST)',
  },
  { group: 'UTC+03:00', timezone: 'Asia/Qatar', label: 'Asia/Qatar (+03)' },
  { group: 'UTC+03:00', timezone: 'Asia/Riyadh', label: 'Asia/Riyadh (+03)' },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Athens',
    label: 'Europe/Athens (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Bucharest',
    label: 'Europe/Bucharest (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Chisinau',
    label: 'Europe/Chisinau (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Helsinki',
    label: 'Europe/Helsinki (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Istanbul',
    label: 'Europe/Istanbul (+03)',
  },
  { group: 'UTC+03:00', timezone: 'Europe/Kiev', label: 'Europe/Kiev (EEST)' },
  { group: 'UTC+03:00', timezone: 'Europe/Kirov', label: 'Europe/Kirov (+03)' },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Mariehamn',
    label: 'Europe/Mariehamn (EEST)',
  },
  { group: 'UTC+03:00', timezone: 'Europe/Minsk', label: 'Europe/Minsk (+03)' },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Moscow',
    label: 'Europe/Moscow (MSK)',
  },
  { group: 'UTC+03:00', timezone: 'Europe/Riga', label: 'Europe/Riga (EEST)' },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Simferopol',
    label: 'Europe/Simferopol (MSK)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Sofia',
    label: 'Europe/Sofia (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Tallinn',
    label: 'Europe/Tallinn (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Uzhgorod',
    label: 'Europe/Uzhgorod (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Vilnius',
    label: 'Europe/Vilnius (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Volgograd',
    label: 'Europe/Volgograd (+03)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Europe/Zaporozhye',
    label: 'Europe/Zaporozhye (EEST)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Indian/Antananarivo',
    label: 'Indian/Antananarivo (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Indian/Comoro',
    label: 'Indian/Comoro (EAT)',
  },
  {
    group: 'UTC+03:00',
    timezone: 'Indian/Mayotte',
    label: 'Indian/Mayotte (EAT)',
  },
  // UTC+02:00
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Blantyre',
    label: 'Africa/Blantyre (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Bujumbura',
    label: 'Africa/Bujumbura (CAT)',
  },
  { group: 'UTC+02:00', timezone: 'Africa/Cairo', label: 'Africa/Cairo (EET)' },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Ceuta',
    label: 'Africa/Ceuta (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Gaborone',
    label: 'Africa/Gaborone (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Harare',
    label: 'Africa/Harare (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Johannesburg',
    label: 'Africa/Johannesburg (SAST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Kigali',
    label: 'Africa/Kigali (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Lubumbashi',
    label: 'Africa/Lubumbashi (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Lusaka',
    label: 'Africa/Lusaka (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Maputo',
    label: 'Africa/Maputo (CAT)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Maseru',
    label: 'Africa/Maseru (SAST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Mbabane',
    label: 'Africa/Mbabane (SAST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Africa/Tripoli',
    label: 'Africa/Tripoli (EET)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Antarctica/Troll',
    label: 'Antarctica/Troll (+02)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Arctic/Longyearbyen',
    label: 'Arctic/Longyearbyen (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Amsterdam',
    label: 'Europe/Amsterdam (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Andorra',
    label: 'Europe/Andorra (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Belgrade',
    label: 'Europe/Belgrade (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Berlin',
    label: 'Europe/Berlin (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Bratislava',
    label: 'Europe/Bratislava (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Brussels',
    label: 'Europe/Brussels (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Budapest',
    label: 'Europe/Budapest (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Busingen',
    label: 'Europe/Busingen (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Copenhagen',
    label: 'Europe/Copenhagen (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Gibraltar',
    label: 'Europe/Gibraltar (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Kaliningrad',
    label: 'Europe/Kaliningrad (EET)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Ljubljana',
    label: 'Europe/Ljubljana (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Luxembourg',
    label: 'Europe/Luxembourg (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Madrid',
    label: 'Europe/Madrid (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Malta',
    label: 'Europe/Malta (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Monaco',
    label: 'Europe/Monaco (CEST)',
  },
  { group: 'UTC+02:00', timezone: 'Europe/Oslo', label: 'Europe/Oslo (CEST)' },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Paris',
    label: 'Europe/Paris (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Podgorica',
    label: 'Europe/Podgorica (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Prague',
    label: 'Europe/Prague (CEST)',
  },
  { group: 'UTC+02:00', timezone: 'Europe/Rome', label: 'Europe/Rome (CEST)' },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/San_Marino',
    label: 'Europe/San Marino (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Sarajevo',
    label: 'Europe/Sarajevo (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Skopje',
    label: 'Europe/Skopje (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Stockholm',
    label: 'Europe/Stockholm (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Tirane',
    label: 'Europe/Tirane (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Vaduz',
    label: 'Europe/Vaduz (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Vatican',
    label: 'Europe/Vatican (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Vienna',
    label: 'Europe/Vienna (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Warsaw',
    label: 'Europe/Warsaw (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Zagreb',
    label: 'Europe/Zagreb (CEST)',
  },
  {
    group: 'UTC+02:00',
    timezone: 'Europe/Zurich',
    label: 'Europe/Zurich (CEST)',
  },
  // UTC+01:00
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Algiers',
    label: 'Africa/Algiers (CET)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Bangui',
    label: 'Africa/Bangui (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Brazzaville',
    label: 'Africa/Brazzaville (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Casablanca',
    label: 'Africa/Casablanca (WEST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Douala',
    label: 'Africa/Douala (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/El_Aaiun',
    label: 'Africa/El Aaiun (WEST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Kinshasa',
    label: 'Africa/Kinshasa (WAT)',
  },
  { group: 'UTC+01:00', timezone: 'Africa/Lagos', label: 'Africa/Lagos (WAT)' },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Libreville',
    label: 'Africa/Libreville (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Luanda',
    label: 'Africa/Luanda (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Malabo',
    label: 'Africa/Malabo (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Ndjamena',
    label: 'Africa/Ndjamena (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Niamey',
    label: 'Africa/Niamey (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Porto-Novo',
    label: 'Africa/Porto-Novo (WAT)',
  },
  { group: 'UTC+01:00', timezone: 'Africa/Tunis', label: 'Africa/Tunis (CET)' },
  {
    group: 'UTC+01:00',
    timezone: 'Africa/Windhoek',
    label: 'Africa/Windhoek (WAT)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Atlantic/Canary',
    label: 'Atlantic/Canary (WEST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Atlantic/Faroe',
    label: 'Atlantic/Faroe (WEST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Atlantic/Madeira',
    label: 'Atlantic/Madeira (WEST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Europe/Dublin',
    label: 'Europe/Dublin (IST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Europe/Guernsey',
    label: 'Europe/Guernsey (BST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Europe/Isle_of_Man',
    label: 'Europe/Isle of Man (BST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Europe/Jersey',
    label: 'Europe/Jersey (BST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Europe/Lisbon',
    label: 'Europe/Lisbon (WEST)',
  },
  {
    group: 'UTC+01:00',
    timezone: 'Europe/London',
    label: 'Europe/London (BST)',
  },
  // UTC
  { group: 'UTC', timezone: 'Africa/Abidjan', label: 'Africa/Abidjan (GMT)' },
  { group: 'UTC', timezone: 'Africa/Accra', label: 'Africa/Accra (GMT)' },
  { group: 'UTC', timezone: 'Africa/Bamako', label: 'Africa/Bamako (GMT)' },
  { group: 'UTC', timezone: 'Africa/Banjul', label: 'Africa/Banjul (GMT)' },
  { group: 'UTC', timezone: 'Africa/Bissau', label: 'Africa/Bissau (GMT)' },
  { group: 'UTC', timezone: 'Africa/Conakry', label: 'Africa/Conakry (GMT)' },
  { group: 'UTC', timezone: 'Africa/Dakar', label: 'Africa/Dakar (GMT)' },
  { group: 'UTC', timezone: 'Africa/Freetown', label: 'Africa/Freetown (GMT)' },
  { group: 'UTC', timezone: 'Africa/Lome', label: 'Africa/Lome (GMT)' },
  { group: 'UTC', timezone: 'Africa/Monrovia', label: 'Africa/Monrovia (GMT)' },
  {
    group: 'UTC',
    timezone: 'Africa/Nouakchott',
    label: 'Africa/Nouakchott (GMT)',
  },
  {
    group: 'UTC',
    timezone: 'Africa/Ouagadougou',
    label: 'Africa/Ouagadougou (GMT)',
  },
  { group: 'UTC', timezone: 'Africa/Sao_Tome', label: 'Africa/Sao_Tome (GMT)' },
  {
    group: 'UTC',
    timezone: 'America/Danmarkshavn',
    label: 'America/Danmarkshavn (GMT)',
  },
  {
    group: 'UTC',
    timezone: 'America/Scoresbysund',
    label: 'America/Scoresbysund (+00)',
  },
  { group: 'UTC', timezone: 'Atlantic/Azores', label: 'Atlantic/Azores (+00)' },
  {
    group: 'UTC',
    timezone: 'Atlantic/Reykjavik',
    label: 'Atlantic/Reykjavik (GMT)',
  },
  {
    group: 'UTC',
    timezone: 'Atlantic/St_Helena',
    label: 'Atlantic/St_Helena (GMT)',
  },
  { group: 'UTC', timezone: 'UTC', label: 'UTC (UTC)' },
  // UTC-01:00
  {
    group: 'UTC-01:00',
    timezone: 'Atlantic/Cape_Verde',
    label: 'Atlantic/Cape Verde (-01)',
  },
  // UTC-02:00
  {
    group: 'UTC-02:00',
    timezone: 'America/Godthab',
    label: 'America/Godthab (-02)',
  },
  {
    group: 'UTC-02:00',
    timezone: 'America/Miquelon',
    label: 'America/Miquelon (-02)',
  },
  {
    group: 'UTC-02:00',
    timezone: 'America/Noronha',
    label: 'America/Noronha (-02)',
  },
  {
    group: 'UTC-02:00',
    timezone: 'Atlantic/South_Georgia',
    label: 'Atlantic/South Georgia (-02)',
  },
  // UTC-02:30
  {
    group: 'UTC-02:30',
    timezone: 'America/St_Johns',
    label: 'America/St Johns (NDT)',
  },
  // UTC-03:00
  {
    group: 'UTC-03:00',
    timezone: 'America/Araguaina',
    label: 'America/Araguaina (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Buenos_Aires',
    label: 'America/Argentina/Buenos Aires (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Catamarca',
    label: 'America/Argentina/Catamarca (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Cordoba',
    label: 'America/Argentina/Cordoba (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Jujuy',
    label: 'America/Argentina/Jujuy (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/La_Rioja',
    label: 'America/Argentina/La Rioja (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Mendoza',
    label: 'America/Argentina/Mendoza (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Rio_Gallegos',
    label: 'America/Argentina/Rio Gallegos (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Salta',
    label: 'America/Argentina/Salta (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/San_Juan',
    label: 'America/Argentina/San Juan (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/San_Luis',
    label: 'America/Argentina/San Luis (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Tucuman',
    label: 'America/Argentina/Tucuman (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Argentina/Ushuaia',
    label: 'America/Argentina/Ushuaia (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Bahia',
    label: 'America/Bahia (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Belem',
    label: 'America/Belem (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Cayenne',
    label: 'America/Cayenne (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Fortaleza',
    label: 'America/Fortaleza (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Glace_Bay',
    label: 'America/Glace_Bay (ADT)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Goose_Bay',
    label: 'America/Goose_Bay (ADT)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Halifax',
    label: 'America/Halifax (ADT)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Maceio',
    label: 'America/Maceio (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Moncton',
    label: 'America/Moncton (ADT)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Montevideo',
    label: 'America/Montevideo (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Paramaribo',
    label: 'America/Paramaribo (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Punta_Arenas',
    label: 'America/Punta Arenas (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Recife',
    label: 'America/Recife (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Santarem',
    label: 'America/Santarem (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Sao_Paulo',
    label: 'America/Sao Paulo (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'America/Thule',
    label: 'America/Thule (ADT)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'Antarctica/Palmer',
    label: 'Antarctica/Palmer (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'Antarctica/Rothera',
    label: 'Antarctica/Rothera (-03)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'Atlantic/Bermuda',
    label: 'Atlantic/Bermuda (ADT)',
  },
  {
    group: 'UTC-03:00',
    timezone: 'Atlantic/Stanley',
    label: 'Atlantic/Stanley (-03)',
  },
  // UTC-04:00
  {
    group: 'UTC-04:00',
    timezone: 'America/Anguilla',
    label: 'America/Anguilla (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Antigua',
    label: 'America/Antigua (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Aruba',
    label: 'America/Aruba (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Asuncion',
    label: 'America/Asuncion (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Barbados',
    label: 'America/Barbados (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Blanc-Sablon',
    label: 'America/Blanc-Sablon (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Boa_Vista',
    label: 'America/Boa Vista (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Campo_Grande',
    label: 'America/Campo Grande (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Caracas',
    label: 'America/Caracas (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Cuiaba',
    label: 'America/Cuiaba (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Curacao',
    label: 'America/Curacao (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Detroit',
    label: 'America/Detroit (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Dominica',
    label: 'America/Dominica (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Grand_Turk',
    label: 'America/Grand Turk (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Grenada',
    label: 'America/Grenada (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Guadeloupe',
    label: 'America/Guadeloupe (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Guyana',
    label: 'America/Guyana (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Havana',
    label: 'America/Havana (CDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Indiana/Indianapolis',
    label: 'America/Indiana/Indianapolis (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Indiana/Marengo',
    label: 'America/Indiana/Marengo (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Indiana/Petersburg',
    label: 'America/Indiana/Petersburg (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Indiana/Vevay',
    label: 'America/Indiana/Vevay (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Indiana/Vincennes',
    label: 'America/Indiana/Vincennes (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Indiana/Winamac',
    label: 'America/Indiana/Winamac (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Iqaluit',
    label: 'America/Iqaluit (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Kentucky/Louisville',
    label: 'America/Kentucky/Louisville (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Kentucky/Monticello',
    label: 'America/Kentucky/Monticello (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Kralendijk',
    label: 'America/Kralendijk (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/La_Paz',
    label: 'America/La_Paz (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Lower_Princes',
    label: 'America/Lower Princes (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Manaus',
    label: 'America/Manaus (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Marigot',
    label: 'America/Marigot (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Martinique',
    label: 'America/Martinique (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Montserrat',
    label: 'America/Montserrat (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Nassau',
    label: 'America/Nassau (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/New_York',
    label: 'America/New_York (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Nipigon',
    label: 'America/Nipigon (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Pangnirtung',
    label: 'America/Pangnirtung (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Port-au-Prince',
    label: 'America/Port-au-Prince (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Port_of_Spain',
    label: 'America/Port of Spain (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Porto_Velho',
    label: 'America/Porto Velho (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Puerto_Rico',
    label: 'America/Puerto Rico (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Santiago',
    label: 'America/Santiago (-04)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Santo_Domingo',
    label: 'America/Santo Domingo (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/St_Barthelemy',
    label: 'America/St Barthelemy (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/St_Kitts',
    label: 'America/St Kitts (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/St_Lucia',
    label: 'America/St Lucia (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/St_Thomas',
    label: 'America/St Thomas (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/St_Vincent',
    label: 'America/St Vincent (AST)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Thunder_Bay',
    label: 'America/Thunder Bay (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Toronto',
    label: 'America/Toronto (EDT)',
  },
  {
    group: 'UTC-04:00',
    timezone: 'America/Tortola',
    label: 'America/Tortola (AST)',
  },
  // UTC-05:00
  {
    group: 'UTC-05:00',
    timezone: 'America/Atikokan',
    label: 'America/Atikokan (EST)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Bahia_Banderas',
    label: 'America/Bahia Banderas (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Bogota',
    label: 'America/Bogota (-05)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Cancun',
    label: 'America/Cancun (EST)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Cayman',
    label: 'America/Cayman (EST)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Chicago',
    label: 'America/Chicago (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Eirunepe',
    label: 'America/Eirunepe (-05)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Guayaquil',
    label: 'America/Guayaquil (-05)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Indiana/Knox',
    label: 'America/Indiana/Knox (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Indiana/Tell_City',
    label: 'America/Indiana/Tell City (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Jamaica',
    label: 'America/Jamaica (EST)',
  },
  { group: 'UTC-05:00', timezone: 'America/Lima', label: 'America/Lima (-05)' },
  {
    group: 'UTC-05:00',
    timezone: 'America/Matamoros',
    label: 'America/Matamoros (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Menominee',
    label: 'America/Menominee (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Merida',
    label: 'America/Merida (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Mexico_City',
    label: 'America/Mexico City (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Monterrey',
    label: 'America/Monterrey (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/North_Dakota/Beulah',
    label: 'America/North Dakota/Beulah (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/North_Dakota/Center',
    label: 'America/North Dakota/Center (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/North_Dakota/New_Salem',
    label: 'America/North Dakota/New Salem (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Panama',
    label: 'America/Panama (EST)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Rainy_River',
    label: 'America/Rainy River (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Rankin_Inlet',
    label: 'America/Rankin Inlet (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Resolute',
    label: 'America/Resolute (CDT)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Rio_Branco',
    label: 'America/Rio Branco (-05)',
  },
  {
    group: 'UTC-05:00',
    timezone: 'America/Winnipeg',
    label: 'America/Winnipeg (CDT)',
  },
  // UTC-06:00
  {
    group: 'UTC-06:00',
    timezone: 'America/Belize',
    label: 'America/Belize (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Boise',
    label: 'America/Boise (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Cambridge_Bay',
    label: 'America/Cambridge Bay (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Chihuahua',
    label: 'America/Chihuahua (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Costa_Rica',
    label: 'America/Costa Rica (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Denver',
    label: 'America/Denver (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Edmonton',
    label: 'America/Edmonton (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/El_Salvador',
    label: 'America/El Salvador (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Guatemala',
    label: 'America/Guatemala (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Inuvik',
    label: 'America/Inuvik (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Managua',
    label: 'America/Managua (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Mazatlan',
    label: 'America/Mazatlan (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Ojinaga',
    label: 'America/Ojinaga (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Regina',
    label: 'America/Regina (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Swift_Current',
    label: 'America/Swift Current (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Tegucigalpa',
    label: 'America/Tegucigalpa (CST)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'America/Yellowknife',
    label: 'America/Yellowknife (MDT)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'Pacific/Easter',
    label: 'Pacific/Easter (-06)',
  },
  {
    group: 'UTC-06:00',
    timezone: 'Pacific/Galapagos',
    label: 'Pacific/Galapagos (-06)',
  },
  // UTC-07:00
  {
    group: 'UTC-07:00',
    timezone: 'America/Creston',
    label: 'America/Creston (MST)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Dawson',
    label: 'America/Dawson (PDT)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Dawson_Creek',
    label: 'America/Dawson Creek (MST)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Fort_Nelson',
    label: 'America/Fort Nelson (MST)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Hermosillo',
    label: 'America/Hermosillo (MST)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Los_Angeles',
    label: 'America/Los Angeles (PDT)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Phoenix',
    label: 'America/Phoenix (MST)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Tijuana',
    label: 'America/Tijuana (PDT)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Vancouver',
    label: 'America/Vancouver (PDT)',
  },
  {
    group: 'UTC-07:00',
    timezone: 'America/Whitehorse',
    label: 'America/Whitehorse (PDT)',
  },
  // UTC-08:00
  {
    group: 'UTC-08:00',
    timezone: 'America/Anchorage',
    label: 'America/Anchorage (AKDT)',
  },
  {
    group: 'UTC-08:00',
    timezone: 'America/Juneau',
    label: 'America/Juneau (AKDT)',
  },
  {
    group: 'UTC-08:00',
    timezone: 'America/Metlakatla',
    label: 'America/Metlakatla (AKDT)',
  },
  {
    group: 'UTC-08:00',
    timezone: 'America/Nome',
    label: 'America/Nome (AKDT)',
  },
  {
    group: 'UTC-08:00',
    timezone: 'America/Sitka',
    label: 'America/Sitka (AKDT)',
  },
  {
    group: 'UTC-08:00',
    timezone: 'America/Yakutat',
    label: 'America/Yakutat (AKDT)',
  },
  {
    group: 'UTC-08:00',
    timezone: 'Pacific/Pitcairn',
    label: 'Pacific/Pitcairn (-08)',
  },
  // UTC-09:00
  { group: 'UTC-09:00', timezone: 'America/Adak', label: 'America/Adak (HDT)' },
  {
    group: 'UTC-09:00',
    timezone: 'Pacific/Gambier',
    label: 'Pacific/Gambier (-09)',
  },
  // UTC-09:30
  {
    group: 'UTC-09:30',
    timezone: 'Pacific/Marquesas',
    label: 'Pacific/Marquesas (-09:30)',
  },
  // UTC-10:00
  {
    group: 'UTC-10:00',
    timezone: 'Pacific/Honolulu',
    label: 'Pacific/Honolulu (HST)',
  },
  {
    group: 'UTC-10:00',
    timezone: 'Pacific/Rarotonga',
    label: 'Pacific/Rarotonga (-10)',
  },
  {
    group: 'UTC-10:00',
    timezone: 'Pacific/Tahiti',
    label: 'Pacific/Tahiti (-10)',
  },
  // UTC-11:00
  {
    group: 'UTC-11:00',
    timezone: 'Pacific/Midway',
    label: 'Pacific/Midway (SST)',
  },
  { group: 'UTC-11:00', timezone: 'Pacific/Niue', label: 'Pacific/Niue (-11)' },
  {
    group: 'UTC-11:00',
    timezone: 'Pacific/Pago_Pago',
    label: 'Pacific/Pago Pago (SST)',
  },
] as IanaTimezone[];
