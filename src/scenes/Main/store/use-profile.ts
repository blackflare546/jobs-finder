import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileState {
  name: string;
  updateName: (name: string) => void;
  age: string;
  updateAge: (age: string) => void;
  address: string;
  updateAddress: (address: string) => void;
}

export default create<ProfileState>()(
  persist(
    (set) => ({
      name: "",
      age: "",
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
