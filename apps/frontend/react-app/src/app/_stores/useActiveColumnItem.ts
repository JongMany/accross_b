// import { UniqueIdentifier } from '@dnd-kit/core';
import { create } from 'zustand';

type State = {
  id: string | null;
};

type Action = {
  setId: (id: string) => void;
  resetId: () => void;
};

const useActiveColumnItem = create<State & Action>((set) => ({
  id: null,
  setId: (id) => set({ id }),
  resetId: () => set({ id: null }),
}));

export default useActiveColumnItem;
