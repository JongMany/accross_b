import styled from '@emotion/styled';

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
    row-gap: 20px;

    h3 {
      font-size: 20px;
      margin: 0;
    }
  }

  input {
    width: 200px;
    border: 1px solid #000;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 15px;
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
    font-size: 20px;
    cursor: pointer;
  }
`;
export default ModalContentWrapper;
