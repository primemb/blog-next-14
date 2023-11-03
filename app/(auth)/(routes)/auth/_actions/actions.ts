"use server";

import { ILoginResponse, IRegisterResponse } from "../_types/types";

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
      cache: "no-cache",
    });

    const body = await res.json();

    if (!res.ok) {
      return { statusCode: res.status, error: body.error };
    }

    return { statusCode: 200, token: body.response };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: "Something went wrong" };
  }
};

export const registerSubmit = async (
  prevState: IRegisterResponse,
  formData: FormData
): Promise<IRegisterResponse> => {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  if (!email || !password || !username) {
    return {
      statusCode: 400,
      error: "Email, Password and Username are required",
    };
  }

  try {
    const res = await fetch("https://ffrhqp-3000.csb.app/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    const body = await res.json();

    if (!res.ok) {
      return {
        statusCode: res.status,
        error: body.error || "Something went wrong",
      };
    }

    return { statusCode: 200 };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: "Something went wrong" };
  }
};
