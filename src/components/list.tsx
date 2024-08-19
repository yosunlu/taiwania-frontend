"use client"

import axios from "axios";
import { useEffect, useState } from 'react';


interface Word {
  id: number;
  phrase: string;
  pronounciation: string;
  definition: string;
  tags: string;
  audioURL: string
}

export default function List() {
  const [phrases, setWords] = useState<Word[]>([]);
  // axios.get('http://localhost:4000/api')
  // .then(response => {
  //   console.log(response.data)
  //   setWords(response.data.phrases)
  // })
  // .catch(error => console.error('Error fetching data:', error));

  useEffect(() => {
    axios.get('http://localhost:4000/api')
      .then(response => {
        console.log(response.data);
        setWords(response.data.phrases);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div className="text-black/50 text-sm sm:px-9">
        <table className="w-full border-collapse">
          <thead className="font-thin text-emerald-800  border-b">
            <tr>
              <th className="text-left w-1/7">Phrase</th>
              <th className="text-left ">Pronounciation</th>
              <th className="text-left w-1/2">Definition</th>
              <th className="text-left w-1/7 px-3">Tags</th>
              <th className="text-left">Audio</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase) => (
              <tr key={phrase.id} className="border-b">
                <td className="py-2">{phrase.phrase}</td>
                <td className="py-2">{phrase.pronounciation}</td>
                <td className="py-2">{phrase.definition}</td>
                <td className="py-2 px-3">{phrase.tags}</td>
                <td className="py-2 px-3">
                  {phrase.audioURL ? (
                    <a href={phrase.audioURL} target="_blank" rel="noopener noreferrer">
                      Listen
                    </a>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
