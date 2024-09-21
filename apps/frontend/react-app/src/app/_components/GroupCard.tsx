import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function GroupCard({
  name,
  count,
  createdAt,
}: {
  name: string;
  count: number;
  createdAt: number;
}) {
  return (
    <Card>
      <div className="date">{createdAt}</div>
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
          <div className="setting">
            <span>···</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  height: 120px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  .date {
    height: 16px;
    background: #b692f6;
    color: #fff;
    font-size: 10px;
    padding-left: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }

  .group-name {
    font-size: 12px;
    color: #261c4c;
    line-height: 18px;
    font-weight: 700;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;

    .order-count {
      height: 28px;
      color: #261c4c;
      font-size: 20px;
      font-weight: 900;
      line-height: 24px;
      display: flex;
      align-items: center;
      span {
        margin-left: 6px;
        font-size: 16px;
      }
    }

    .setting {
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f9f5ff;
      border-radius: 4px;
      cursor: pointer;
      font-size: 20px;
    }
  }
`;
