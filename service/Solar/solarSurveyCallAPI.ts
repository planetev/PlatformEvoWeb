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
 token
}: Base3): Promise<any[]> => {
 try {
  const params = {
   serach,
   page,
   pageSize,
 };


   const res: AxiosResponse<any[]> = await axios.get(process.env.NEXT_PUBLIC_API + "solar/survey",{params,
     headers: {
       Authorization: `Bearer ${token}`,
     },
   },

   );

   return res.data;
 } catch (error: any) {
   console.error("Error fetching survey data:", error);
   throw error;
 }
};
