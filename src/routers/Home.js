import React, {useEffect, useState} from "react";
import { dbService } from "fBase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async() => {
    const dbNweet = await getDocs(collection(dbService, "nweets"));
    console.log('dbNweet', dbNweet)
    dbNweet.forEach(doc => {
      const nweetObj = {
        ...doc.data(),
        id: doc.id
      }
      console.log(nweetObj)
      setNweets(prev => [nweetObj, ...prev]);
    }) 
    console.log('nweets', nweets)
  };
  useEffect(()=>{
    getNweets();  
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(collection(dbService, "nweets"), {
      nweet,
      createdAt: Date.now()
    });
    console.log(`document`, docRef)
    setNweet("");

  }
  const onChange = event => {
    const {target: {value}} = event;
    setNweet(value);
  }
  console.log('nweets', nweets) 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChange} type={"text"} placeholder="what's on your mind?" maxLength={120} />
        <input type={"submit"} value="Nweet" />
        <div>
          {nweets.map(nwt => {
            return (
              <div key={nwt.id}>
                <h4>{nwt.nweet}</h4>
              </div>
            )
          })}
        </div>
      </form>
    </div>
  )   
}

export default Home;