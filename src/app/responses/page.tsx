
"use client";
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDuBbgwcJR0wWJMq7CFV-VgZMqNtFzDPko",
  authDomain: "iqlaa-9b951.firebaseapp.com",
  projectId: "iqlaa-9b951",
  storageBucket: "iqlaa-9b951.firebasestorage.app",
  messagingSenderId: "728888284570",
  appId: "1:728888284570:web:af08032d700e028a029623",
  measurementId: "G-YVR4ERB4BJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log("Firebase db: ", db);
type ResponseData = {
    id: string;
    [key: string]: any;
};


// load questions from the questions.json file
import questions from '../questions.json';

function getQuestionText(questionId: string, questions: { id: string; question: string }[]) {
  const q = questions.find(q => q.id === questionId);
  return q ? q.question : "Unknown question";
}



type Question = {
  id: string;
  question: string;
  type: string;
  options?: string[];
};
const _questions: Question[] = questions.questions || [];






const Responses: React.FC = () => {
  const [responses, setResponses] = useState<ResponseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>({});

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResponses(data);
        console.log("Fetched responses: ", data);
      } catch (error) {
        console.error('Error fetching responses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResponses();
  }, []);

  useEffect(() => {
    // Calculate stats after responses are loaded
    const newStats: any = {};
    _questions.forEach(q => {
      if (q.type === "multiple_choice" && q.options) {
        newStats[q.id] = {};
        q.options.forEach(option => {
          newStats[q.id][option] = 0;
        });
      }
    });
    responses.forEach(userResponse => {
      userResponse.responses?.forEach((answerObj: any) => {
        const { questionId, answer } = answerObj;
        if (newStats[questionId] && newStats[questionId][answer] !== undefined) {
          newStats[questionId][answer]++;
        }
      });
    });
    setStats(newStats);
    if (Object.keys(newStats).length > 0) {
      console.log("Stats: ", newStats);
    }
  }, [responses]);

  if (loading) return <div>Loading...</div>;
  // clculate totale user responses
  let totalResponses = "إجمالي عدد الإجابات: " + responses.length;

  return (
    <div className='bg-gray-800 flex flex-col items-center justify-center' dir="rtl">
      <h2 className='mt-10 mb-2 text-4xl font-bold text-center mb-10' style={{color: "cyan"}}>{totalResponses}</h2>
      <ul className='w-[50%]' style={{ minWidth: 300 }}>
        {_questions.filter(q => q.type === 'multiple_choice').map(q => (
          <li key={q.id} className='mb-5 bg-gray-700 rounded p-3' style={{}} >
            <div className='font-bold mb-4' style={{color: "#e7e7e7ff", fontSize: "20px"}}>{q.question}</div>
            <ul className=' flex flex-col gap-2'>
              {q.options && [...q.options]
                .sort((a, b) => (stats[q.id]?.[b] ?? 0) - (stats[q.id]?.[a] ?? 0))
                .map(option => {
                const count = stats[q.id]?.[option] ?? 0;
                const total: any = Object.values(stats[q.id] || {}).reduce((a, b) => Number(a) + Number(b), 0);
                const percent = total > 0 ? (count / total) * 100 : 0;

                return (
                  <li key={option} className='mb-1'>
                    <div className='relative h-full w-full rounded bg-gray-500' style={{zIndex: '0', height: '2rem'}} >
                      <div className='absolute start-0 top-0 h-full rounded bg-green-600' style={{width: `${percent}%`, zIndex: 1, transition: 'width 0.5s'}} />

                      <div className='relative z-10 p-2 flex items-center h-full w-full justify-between' style={{color: "white"}}>
                        <span className='font-bold'>{option}</span>
                        <span className="text-gray-50 font-medium">{percent.toFixed(0)}% - {count}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Responses;