import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function GroupCard({ name, count, createdAt }: { name: string, count: number, createdAt: number }) {
  return (
    <Card>
      <div className="date">{createdAt}</div>
      <div css={css`padding:16px; display:flex; flex-direction: column; gap:10px;`}>
        <div className="group-name">{name}</div>
        <div className="order-count">
          {count}
          <span>건</span>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  height: 120px;
  background: #FFF;
  border-radius: 8px;
  overflow: hidden;

  .date {
    height: 16px;
    background: #B692F6;
    color: #FFF;
    font-size: 10px;
  }
  
  .group-name {
    font-size: 12px;
    color:#261C4C;
  }
  
  .order-count {
    color:#261C4C;
    font-size: 20px;
    font-weight: 700;
    span {
      font-size:16px;
    }
  }
  
`;
