import { create } from "zustand";
import {persist} from "zustand/middleware"
export const useUserStore = create(
    persist(
        (set) => ({
        uid : null,
        name : null,
        dob : null,
        isAuthenticated : false,

        //actions
        setUid : (uid,name = null,dob = null) => {
            set({uid,name,dob, isAuthenticated : true})
            console.log(useUserStore.getState().uid);
        },

        clearUser : () => 
            set({uid:null, name:null, dob: null, isAuthenticated : false})
    }),
    {
        name : "user-storage",
        getStorage : () => localStorage,
    }
    )
)

export const useUser = () => {
  const uid = useUserStore((state) => state.uid);
  const name = useUserStore((state) => state.name);
  const dob = useUserStore((state) => state.dob);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return { uid, name, dob, isAuthenticated };
};

export const useUserActions = () => {
  const setUid = useUserStore((state) => state.setUid);
  const clearUser = useUserStore((state) => state.clearUser);

  return { setUid, clearUser };
};
