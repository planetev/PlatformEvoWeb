import axios, { AxiosResponse } from "axios";

interface Base3 {
  search?: string;
  page?: number;
  pageSize?: number;
  token: any;
  status?: any;
  sort?: any;
}

export const getChargerSurvey = async ({
  search,
  page,
  pageSize,
  token,
  status,
  sort,
}: Base3): Promise<any[]> => {
  try {
    const params = {
      search,
      page,
      pageSize,
      status,
      sort,
    };

    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "charger/surveycharger/",
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

export const getChargerSurveyById = async ({
  id,
  token,
}: any): Promise<any[]> => {
  try {
    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "charger/surveycharger/" + id,
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

export const createChargerSurvey = async ({
  token,
  payload,
}: any): Promise<any> => {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "charger/surveycharger",
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

export const updateChargerSurvey = async ({
  id,
  token,
  payload,
}: any): Promise<any> => {
  try {
    const res = await axios.put(
      process.env.NEXT_PUBLIC_API + "charger/surveycharger/" + id,
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

export const getChargerStatus = async ({ token }: any): Promise<any[]> => {
  try {
    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "charger/surveycharger/getAllStatusCharger",
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
