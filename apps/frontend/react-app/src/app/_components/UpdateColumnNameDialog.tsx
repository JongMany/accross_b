import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { ListColumnResponse } from 'shared-types';
import { toast } from 'react-toastify';
import ModalContentWrapper from './ModalWrapper';
import useActiveColumnItem from '../_stores/useActiveColumnItem';
import { rootQueryClient } from '../../root-query-client';
import useUpdateColumnName from '../_hooks/mutations/useUpdateColumnName';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function UpdateColumnNameDialog({ isOpen, onClose }: Props) {
  const { id } = useActiveColumnItem();
  const { mutate, isError } = useUpdateColumnName();

  const [text, setText] = useState(() => {
    const columns = rootQueryClient.getQueryData<ListColumnResponse>([
      'columns',
    ]);
    const column = columns?.columns.find((col) => col.id === id);
    return column?.name ?? '';
  });

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const updateColumnNameHandler = () => {
    if (!text) {
      toast('컬럼명을 입력해주세요.', { type: 'error', autoClose: 3000 });
      return;
    }
    if (!id) {
      toast('컬럼 ID가 없습니다.', { type: 'error', autoClose: 3000 });
      return;
    }
    mutate({ columnId: id, name: text });
    onClose();
  };

  useEffect(() => {
    if (isError) {
      toast('에러가 발생했습니다.', { type: 'error', autoClose: 3000 });
    }
  }, [isError]);

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
          width: '400px',
          height: '300px',
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
          <h3>컬럼명 수정</h3>
          <input
            type="text"
            value={text}
            placeholder="컬럼명"
            onChange={textChangeHandler}
          />
          <button type="button" onClick={updateColumnNameHandler}>
            변경
          </button>
        </div>
      </ModalContentWrapper>
    </ReactModal>
  );
}

export default UpdateColumnNameDialog;
