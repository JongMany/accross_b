import { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';
import useCreateGroup from './_hooks/mutations/useCreateGorup';

export default function CreateGroupDialog({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [groupName, setGroupName] = useState('그룹 이름');
  const [orderCount, setOrderCount] = useState(0);
  const {
    mutate, isSuccess, isError, reset,
  } = useCreateGroup();
  const onCreate = useCallback(() => {
    if (!groupName || orderCount < -1) {
      return;
    }
    mutate({
      groupName,
      orderCount,
    });
  }, [groupName, mutate, orderCount]);
  useEffect(() => {
    if (isSuccess) {
      reset();
      onClose();
    }
  }, [isSuccess, onClose, reset]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.querySelector('#root') as HTMLElement}
      parentSelector={() => document.querySelector('#float-elements')!}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      <div>
        <button type="button" onClick={onClose}>close</button>
        <h2>Dialog</h2>
        <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
        <input type="number" value={orderCount} onChange={(e) => setOrderCount(e.target.valueAsNumber)} />
        <button type="button" onClick={onCreate}>생성</button>
        {isError && <div css={css`color:red`}>에러가 발생했습니다.</div>}
      </div>
    </ReactModal>
  );
}
