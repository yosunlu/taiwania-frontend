import "server-only";
import axios from "axios";

interface Word {
    id: number;
    phrase: string;
    pronounciation: string;
    definition: string;
    tags: string;
    audioURL: string
  }
  
  interface FetchDataResponse {
    totalCount: number;
    phrases: Word[];
  }
  
export const getRows = async (page = 1): Promise<FetchDataResponse> => {
    const apiURL: string = process.env.NEXT_PUBLIC_API_URL_LOCAL as string;

    let totalCount = 0;
    let phrases: Word[] = [];

    try {
        const response = await axios.get(apiURL);
        ({ totalCount, phrases } = response.data); // Destructure and assign
    } catch (error) {
        console.error('Error fetching data:', error);
        // Return an object with default values in case of error
        return {
        totalCount: 0,
        phrases: []
        };
    }

    return {
        totalCount,
        phrases
    };
};