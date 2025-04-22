import { FieldValues } from "react-hook-form";
import API from "./axios-client";

export const loginMutationFn = async (data: FieldValues) =>
  await API.post("/auth/login", data);

export const registerMutationFn = async (data: FieldValues) =>
  await API.post(`/auth/register`, data);

export const verifyEmailMutationFn = async (data: FieldValues) =>
  await API.post(`/auth/verify/email`, data);

export const forgotPasswordMutationFn = async (data: FieldValues) =>
  await API.post(`/auth/password/forgot`, data);

export const setPasswordMutationFn = async (data: FieldValues) =>
  await API.post(`/auth/password/reset`, data);

export const logoutMutationFn = async () => await API.post(`/auth/logout`);
