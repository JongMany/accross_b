import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppIndexPage from './page';
import api from './api';

describe('AppIndexPage', () => {
  beforeEach(() => {
    api.get = jest.fn().mockResolvedValue({
      data: {
        groups: {
          init: [],
          progress: [],
          done: [],
          pending: [],
        },
      },
    });
    api.post = jest.fn();
  });

  function Subject() {
    const testQueryClient = new QueryClient();

    return (
      <QueryClientProvider client={testQueryClient}>
        <AppIndexPage />
        <div id="float-elements" />
      </QueryClientProvider>
    );
  }

  it('초기 화면이 로딩되면 제목과 함께 각 4개의 컬럼이 출력되어야한다.', async () => {
    render(<Subject />);
    expect(screen.getByText('로딩중입니다.')).not.toBeNull();
    await screen.findByRole('heading', { name: '어크로스비' });
    expect(screen.getByText('대기')).not.toBeNull();
    expect(screen.getByText('진행중')).not.toBeNull();
    expect(screen.getByText('완료')).not.toBeNull();
    expect(screen.getByText('보류')).not.toBeNull();
  });
  it('서버에서 내려온 그룹을 출력한다.', async () => {
    (api.get as jest.Mock).mockResolvedValue({
      data: {
        groups: {
          init: [{
            id: 'aaa', name: 'Group-1', orderCount: 1, createdAt: 123123123,
          }],
          progress: [],
          done: [],
          pending: [],
        },
      },
    });
    render(<Subject />);
    expect(screen.getByText('로딩중입니다.')).not.toBeNull();
    await screen.findByRole('heading', { name: '어크로스비' });
    expect(screen.getByText('Group-1')).not.toBeNull();
  });
});
