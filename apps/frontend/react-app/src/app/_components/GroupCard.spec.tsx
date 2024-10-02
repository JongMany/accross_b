import { screen, render } from '@testing-library/react';
import GroupCard from './GroupCard';

describe('app/_components/GroupCard', () => {
  it('그룹 이름과 주문 수가 표시된다.', () => {
    render(
      <GroupCard
        name="그룹 이름"
        count={10}
        createdAt={Date.now()}
        id="10"
        status="INIT"
      />,
    );
    expect(screen.getByText('그룹 이름')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
