import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import useGroupList from './useGroupList';
import api from '../../api';

describe('app/_hooks/queries/useGroupList', () => {
  it('should call api', async () => {
    api.get = jest.fn().mockResolvedValue({
      data: {
        groups: {
          done: [], init: [], pending: [], progress: [],
        },
      },
    });
    const queryClient = new QueryClient();
    const wrapper = ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useGroupList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

    expect(result.current.data).toEqual({
      groups: {
        done: [], init: [], pending: [], progress: [],
      },
    });
  });
});
