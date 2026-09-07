import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { execGroups } from "@/lib/content";

type ExecState = {
  done: Record<string, boolean>;
  toggle: (id: string) => void;
  reset: () => void;
};

const memory: Record<string, string> = {};
const fallbackStorage = {
  getItem: (k: string) => memory[k] ?? null,
  setItem: (k: string, v: string) => {
    memory[k] = v;
  },
  removeItem: (k: string) => {
    delete memory[k];
  },
};

export const useExecuteStore = create<ExecState>()(
  persist(
    (set) => ({
      done: {},
      toggle: (id) =>
        set((s) => ({
          done: { ...s.done, [id]: !s.done[id] },
        })),
      reset: () => set({ done: {} }),
    }),
    {
      name: "logon-execute",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? fallbackStorage : localStorage,
      ),
    },
  ),
);

export function execStats(done: Record<string, boolean>) {
  const ids = execGroups.flatMap((g) => g.tasks.map((t) => t.id));
  const total = ids.length;
  const complete = ids.filter((id) => done[id]).length;
  return { total, complete, pct: total ? Math.round((complete / total) * 100) : 0 };
}
