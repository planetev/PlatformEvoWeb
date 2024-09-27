import axios, { AxiosResponse } from "axios";

interface Base3 {
  search?: string;
  page?: number;
  pageSize?: number;
  token: any;
}

export const getAllUsers = async ({
  search,
  page,
  pageSize,
  token,
}: Base3): Promise<any[]> => {
  try {
    const params = {
      search,
      page,
      pageSize,
    };

    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "users",
      {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    console.error("Error fetching survey data:", error);
    throw error;
  }
};

export const createUser = async ({
  token,
  payload,
}: any): Promise<any> => {
  try {

    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "users",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  } catch (error: any) {
    console.error("Error fetching users data:", error);
    throw error;
  }
};

export const getUserById = async ({
  id,
  token,
}: any): Promise<any> => {
  try {
    const res: AxiosResponse<any> = await axios.get(
      process.env.NEXT_PUBLIC_API + "users/" + id,
      {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    console.error("Error fetching users data:", error);
    throw error;
  }
};


export const updateUsersData = async ({ id, token, payload }: any): Promise<any> => {
  try {
    const res = await axios.put(
      process.env.NEXT_PUBLIC_API + "users/" + id,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  }
  catch (error: any) {
    console.error("Error fetching users data:", error);
    throw error;
  }
}