import React, { useEffect, useState } from 'react';
import { collection, getDocs, } from "firebase/firestore";
import { db } from '../Firebase';
import './Styles/admin.css';
import logo from '../logo.svg';
import { doc, setDoc } from "firebase/firestore"; 
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

const Admin = () => {
    const [teamList, setTeamList] = useState([]);


    useEffect(() => {

        getData();

    }, [])



    
    const getData = async () => {
        const data = []
        const querySnapshot = await getDocs(collection(db, "teams"));
        querySnapshot.forEach((doc) => {
            data.push({ data: doc.data(), id: doc.id });
        }); 
        setTeamList(data);
        
    }


    console.log(teamList);


    const [team1, setTeam1] = useState("");
    const [score1, setScore1] = useState("");

    const [team2, setTeam2] = useState("");
    const [score2, setScore2] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Clicked");
        if (team1.length !== 0 && team2.length !== 0) {
            try {
                await setDoc(doc(db,"teams","scores"), {
                    Team1:team1,
                    Team2:team2,
                    Score1:score1,
                    Score2:score2 }
                )
               
            }
            catch (err) {
                console.log(err)
            }
        }

    }
    return (
        // <div className='adminpage'>
        // <div className='adminpanel'>
        //     <input type="text" placeholder='team 1' value={team1} onChange={(e) => setTeam1(e.target.value)} />
        //     <input type="text" placeholder='team 2' value={team2} onChange={(e) => setTeam2(e.target.value)} />
        //     <button onClick={(e) => handleSubmit(e)} disabled = {teamList.length!==0?true:false}>Submit</button>
        // </div>
        // </div>

        <div className='adminBody'>
            <div className="bar">
                <ul>
                    <li><a href="/"><img style={{width: "300px"}} src={logo} alt="PointBlank" /></a></li>
                    <li><a id="heading" href = "/">Update Score</a></li>
                </ul>
            </div>
            <div className="Form">
                {/* <!-- Team 01 --> */}
                <form action="" method="get">
                    <h1>Team 1</h1>
                    <label htmlFor="name1">Name</label>
                    <input type="text" name="name1" id="name1" required placeholder="FC Barcelona" value={team1} onChange={(e) => setTeam1(e.target.value)}/>
                    <label htmlFor="score1">Score</label>
                    <input type="number" name="score1" id="score1" required placeholder="0" value={score1} onChange={(e) => setScore1(e.target.value)}/>
                </form>
                {/* <!-- Team 02 --> */}
                <form action="" method="get">
                    <h1>Team 2</h1>
                    <label htmlFor="name2">Name</label>
                    <input type="text" name="name2" id="name2" required placeholder="Manchester United FC" value={team2} onChange={(e) => setTeam2(e.target.value)}/>
                    <label htmlFor="score1">Score</label>
                    <input type="number" name="score2" id="score2" required placeholder="0" value={score2} onChange={(e) => setScore2(e.target.value)}/>
                </form>


            </div>
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Update</button>

        </div>
    )
}

export default Admin