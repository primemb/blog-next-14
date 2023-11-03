"use server";
import { cookies } from "next/headers";

import { ILoginResponse } from "../_types/types";

export const loginSubmit = async (
  prevState: ILoginResponse,
  formData: FormData
): Promise<ILoginResponse> => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { statusCode: 400, error: "Email and Password are required" };
  }

  try {
    const res = await fetch("https://ffrhqp-3000.csb.app/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await res.json();

    if (!res.ok) {
      return { statusCode: res.status, error: body.error };
    }

    cookies().set("token", body.response, { httpOnly: true, path: "/" });

    return { statusCode: 200, token: body.response };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: "Something went wrong" };
  }
};
