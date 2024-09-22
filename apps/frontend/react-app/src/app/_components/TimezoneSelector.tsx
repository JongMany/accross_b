import { css } from '@emotion/react';
import React, { ChangeEventHandler } from 'react';
import useCurrentTimezone from '../_stores/useCurrentTimezone';
import { IANA_TIMEZONES } from '../_constants/timezones';

function TimezoneSelector() {
  const { timezone, setTimezone } = useCurrentTimezone();
  const changeTimezone: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTimezone(e.target.value);
  };
  return (
    <div>
      <select
        id="timezone-select"
        css={css`
          min-width: 140px;
          padding: 6px 10px;
        `}
        onChange={changeTimezone}
        defaultValue={timezone}
      >
        {IANA_TIMEZONES.map((item) => (
          <option key={item.label} value={item.timezone}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimezoneSelector;
