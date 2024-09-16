import axios, { AxiosResponse } from "axios";

export const getProfile = async ({ token }: any): Promise<any[]> => {
  try {
    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    console.error("Error fetching profile data:", error);
    throw error;
  }
};
