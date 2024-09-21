import { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import useCreateGroup from './_hooks/mutations/useCreateGroup';

export default function CreateGroupDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [groupName, setGroupName] = useState('');
  const [orderCount, setOrderCount] = useState(0);
  const { mutate, isSuccess, isError, reset } = useCreateGroup();

  const onCreate = useCallback(() => {
    if (!groupName) {
      toast('그룹 이름을 입력해주세요.', { type: 'error', autoClose: 3000 });
      return;
    }
    if (orderCount < -1) {
      toast('주문 수량은 0 이상이어야 합니다.', {
        type: 'error',
        autoClose: 3000,
      });
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
      parentSelector={() =>
        document.querySelector('#float-elements') as HTMLElement
      }
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      style={{
        content: {
          width: '500px',
          height: '400px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <ModalContentWrapper>
        <button type="button" onClick={onClose} className="close-button">
          ❌
        </button>
        <div className="content">
          <h2>그룹 생성</h2>
          <input
            type="text"
            value={groupName}
            placeholder="그룹 이름"
            onChange={(e) => setGroupName(e.target.value)}
          />
          <input
            type="number"
            value={orderCount}
            onChange={(e) => setOrderCount(e.target.valueAsNumber)}
          />
          <button type="button" onClick={onCreate}>
            생성
          </button>
          {isError && (
            <div
              css={css`
                color: red;
              `}
            >
              에러가 발생했습니다.
            </div>
          )}
        </div>
      </ModalContentWrapper>
    </ReactModal>
  );
}

const ModalContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    position: relative;
    display: flex;
    top: 30px;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
  input {
    width: 200px;
    border: 1px solid #000;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 16px;
  }

  button {
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
`;
