import "server-only";
import axios from 'axios';
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
  
  export const getRows = async (page : Number): Promise<FetchDataResponse> => {
    const apiURL: string = process.env.NEXT_PUBLIC_API_URL_LOCAL as string;
    

    try {
      const response = await fetch(`http://localhost:4000/api/${page}`, {
        cache: 'no-store'
    });
        // const response = await axios.get(`http://localhost:4000/api/${page}`);
        

        if (!response.ok) {
            
            console.error('Error fetching data:', response.statusText);
            return { totalCount: 0, phrases: [] };
        }

        const data = await response.json();
        const { totalCount, phrases } = data;
        console.log(data)

        return { totalCount, phrases };

    } catch (error) {
        console.error('Error fetching data:', error);
        return { totalCount: 0, phrases: [] };
    }
};