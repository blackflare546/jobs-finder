import { create } from "zustand";
import { persist } from "zustand/middleware";

type JobsState = {
  jobIds: number[];
  addJob: (id: number) => void;
};

export default create(
  persist<JobsState>(
    (set) => ({
      jobIds: [],
      addJob: (id: number) => {
        set((state) => ({
          jobIds: [...state.jobIds, id],
        }));
      },
    }),
    { name: "all-jobs" }
  )
);
