import "server-only";

interface Word {
  id: number;
  phrase: string;
  pronounciation: string;
  mandarin: string;
  definition: string;
  usage: string;
  tags: string[]; 
  audioURL: string;
}

  
  interface FetchDataResponse {
    totalCount: number;
    phrases: Word[];
  }
  
  export const getRows = async (page : Number, tag: string): Promise<FetchDataResponse> => {
    const apiURL: string = process.env.NEXT_PUBLIC_API_URL_LOCAL as string;
    

    try {
        let response;
        if(tag == ""){
          response = await fetch(`http://34.207.98.199:4000/api/${page}`, {
            cache: 'no-store'
          })
          
        } else {
          // console.log(tag)
          response = await fetch(`http://34.207.98.199:4000/api/${tag}/${page}`, {
            cache: 'no-store'
          })
          
        }
      
        if (!response.ok) {
            
            console.error('Error fetching data:', response.statusText);
            return { totalCount: 0, phrases: [] };
        }

        const data = await response.json();
        const { totalCount, phrases } = data;
        // console.log(data)

        return { totalCount, phrases };

    } catch (error) {
        console.error('Error fetching data:', error);
        return { totalCount: 0, phrases: [] };
    }
};