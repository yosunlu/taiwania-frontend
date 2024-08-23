import "server-only";
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
        const response = await fetch(apiURL + `/${page}`);

        if (!response.ok) {
            
            console.error('Error fetching data:', response.statusText);
            return { totalCount: 0, phrases: [] };
        }

        const data = await response.json();
        const { totalCount, phrases } = data;

        return { totalCount, phrases };

    } catch (error) {
        console.error('Error fetching data:', error);
        return { totalCount: 0, phrases: [] };
    }
};