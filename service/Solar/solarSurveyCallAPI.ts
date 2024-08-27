import axios, { AxiosResponse } from "axios";

interface Base3 {
  serach?: string;
  page?: number;
  pageSize?: number;
  token: any;
}

export const getSolarSurvey = async ({
  serach,
  page,
  pageSize,
  token,
}: Base3): Promise<any[]> => {
  try {
    const params = {
      serach,
      page,
      pageSize,
    };

    const res: AxiosResponse<any[]> = await axios.get(
      process.env.NEXT_PUBLIC_API + "solar/survey",
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

export const createSolarSurvey = async ({
  token,
  payload,
}: any): Promise<any> => {
  try {
    console.log('payload', payload)
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "solar/survey",
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

// export createSolarSurvey = async ({

//   token, payload

// }) =>  await axios.post(process.env.NEXT_PUBLIC_API + "solar/survey", payload, {
//   headers: {
//     authtoken: token,
//   },
// });
