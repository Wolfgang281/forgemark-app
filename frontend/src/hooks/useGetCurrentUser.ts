import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/redux/store";
import { setLoading, setUser } from "@/redux/userSlice";

import type { IUser } from "@/types/user";
import API from "@/utils/axios";

export function useGetCurrentUser() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get("/me");

        if (!response.data.success) {
          return;
        }

        const currentUser: IUser = response.data.user;
        console.log("currentUser: ", currentUser);

        dispatch(setUser(currentUser));
      } catch (error) {
        console.log("Not logged in", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUser();
  }, [dispatch]);
}
