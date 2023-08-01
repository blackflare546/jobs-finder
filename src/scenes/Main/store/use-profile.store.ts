import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProfileState } from "../../../stores/interface/profile-state.interface";

export default create<IProfileState>()(
  persist(
    (set) => ({
      name: "",
      age: "0",
      address: "",
      updateName: (name: string) => set({ name }),
      updateAge: (age: string) => set({ age }),
      updateAddress: (address: string) => set({ address }),
    }),
    {
      name: "profile-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
