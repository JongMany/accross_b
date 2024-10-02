import { css } from '@emotion/react';
import React, { MouseEventHandler } from 'react';
import { GroupStatus } from 'shared-types';
import {
  formatUTCToCustomString,
  getLocalTimeInTimezone,
  getLocalTimeInUTC,
} from '../_utils/date';
import GroupCardModal from './GroupCardModal';
import useActiveGroupItemModal from '../_stores/useActiveGroupItemModal';
import useCurrentTimezone from '../_stores/useCurrentTimezone';

function GroupItem({
  name,
  count,
  createdAt,
  id,
  status,
  dragOverlay = false,
}: {
  dragOverlay?: boolean;
  name: string;
  count: number;
  createdAt: number;
  id: string;
  status: GroupStatus;
}) {
  const { setId, id: activeId } = useActiveGroupItemModal();
  const { timezone } = useCurrentTimezone();

  const triggerShowModal: MouseEventHandler = (e) => {
    e.stopPropagation();
    setId(id);
  };

  return (
    <>
      <div
        className="date"
        style={{ cursor: dragOverlay ? 'grabbing' : 'grab' }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.996 0C1.788 0 0 1.792 0 4C0 6.208 1.788 8 3.996 8C6.208 8 8 6.208 8 4C8 1.792 6.208 0 3.996 0ZM4.00015 7.1998C2.23215 7.1998 0.800146 5.7678 0.800146 3.9998C0.800146 2.2318 2.23215 0.799805 4.00015 0.799805C5.76815 0.799805 7.20015 2.2318 7.20015 3.9998C7.20015 5.7678 5.76815 7.1998 4.00015 7.1998ZM3.59961 2H4.19961V4.1L5.99961 5.168L5.69961 5.66L3.59961 4.4V2Z"
            fill="white"
          />
        </svg>
        <span>
          {formatUTCToCustomString(
            getLocalTimeInTimezone(getLocalTimeInUTC(createdAt), timezone),
          )}
        </span>
      </div>
      <div
        css={css`
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        `}
      >
        <div className="group-name">{name}</div>
        <div className="wrapper">
          <div className="order-count">
            {count}
            <span>건</span>
          </div>
          <div
            className="setting"
            onClick={triggerShowModal}
            data-no-dnd="true"
          >
            <span>···</span>
            {activeId === id && (
              <GroupCardModal id={activeId} currentStatus={status} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupItem;
