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
    <table>
      <thead>
        <tr>
          <th>Phrase</th>
          <th>Pronounciation</th>
          <th>Definition</th>
          <th>Tags</th>
          <th>Audio</th>
        </tr>
      </thead>
      <tbody>
        {phrases.map((phrase) => (
          <tr key={phrase.id}>
            <td>{phrase.phrase}</td>
            <td>{phrase.pronounciation}</td>
            <td>{phrase.definition}</td>
            <td>{phrase.tags}</td>
            <td>{phrase.audioURL}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
