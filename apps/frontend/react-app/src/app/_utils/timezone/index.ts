function getLocalPCTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
export default getLocalPCTimezone;
