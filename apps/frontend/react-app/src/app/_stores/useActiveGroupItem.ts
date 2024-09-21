import { create } from 'zustand';

type State = {
  id: string | null;
};

type Action = {
  setId: (id: string) => void;
  resetId: () => void;
};

const useActiveGroupItem = create<State & Action>((set) => ({
  id: null,
  setId: (id) => set({ id }),
  resetId: () => set({ id: null }),
}));

export default useActiveGroupItem;
