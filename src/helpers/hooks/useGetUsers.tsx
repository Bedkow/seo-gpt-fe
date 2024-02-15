import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserData } from "../../redux/userSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

const useGetUsers = () => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	const { data, loading, error } = useSelector((state: any) => state.user);

	useEffect(() => {
		dispatch(fetchUserData());
	}, [dispatch]);

	if (loading) {
		return { loading: loading };
	}
	if (error) {
		return { error: error };
	}

	return { data: data };
};

export default useGetUsers;
