import { create } from 'zustand';
import getLocalPCTimezone from '../_utils/timezone';

type State = {
  timezone: string;
};

type Action = {
  setTimezone: (timeZone: string) => void;
  resetTimezone: () => void;
};

const useCurrentTimezone = create<State & Action>((set) => ({
  timezone: getLocalPCTimezone(),
  setTimezone: (timezone) => set({ timezone }),
  resetTimezone: () => set({ timezone: getLocalPCTimezone() }),
}));

export default useCurrentTimezone;
