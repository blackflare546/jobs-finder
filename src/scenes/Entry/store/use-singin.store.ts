import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ISigninState } from "../../../stores/interface/signin-state.interface";

export default create<ISigninState>()(
  persist(
    (set) => ({
      email: "",
      password: "",
      updateEmail: (email: string) => set({ email }),
    }),
    {
      name: "singin-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
