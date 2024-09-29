import axios, { AxiosResponse } from "axios";

interface Base3 {
  search?: string;
  page?: number;
  pageSize?: number;
  token: any;
  status?: any;
}

export const getSolarSurvey = async ({
  search,
  page,
  pageSize,
  token,
  status,
}: Base3): Promise<any[]> => {
  try {
    const params = {
      search,
      page,
      pageSize,
      status,
    };

    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "solar/surveysolar",
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


export const getSolarSurveyById = async ({
  id,
  token,
}: any): Promise<any[]> => {
  try {


    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "solar/surveysolar/" + id,
      {

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

export const createSolarSurvey = async ({
  token,
  payload,
}: any): Promise<any> => {
  try {

    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "solar/surveysolar",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  } catch (error: any) {
    console.error("Error fetching survey data:", error);
    throw error;
  }
};

export const updateSolarSurvey = async ({ id, token, payload }: any): Promise<any> => {
  try {
    const res = await axios.put(
      process.env.NEXT_PUBLIC_API + "solar/surveysolar/" + id,
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
    console.error("Error fetching survey data:", error);
    throw error;
  }
}

export const getSolarStatus = async ({ token }: any): Promise<any[]> => {
  try {
    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "solar/surveysolar/getAllStatusSolar",
      {
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