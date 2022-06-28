import React, { useEffect,useState } from 'react';
import './Styles/HomeStyle.css';
import logo from '../logo.svg';
// import { collection, addDoc, getDocs, } from "firebase/firestore";
import { db } from '../Firebase';
import { doc, onSnapshot } from "firebase/firestore";

const Home = () => {
    const [doc2, setdoc2] = useState({})
    useEffect(() => {
        onSnapshot(doc(db, "teams", "scores"), (doc) => {
            setdoc2(doc.data())
        });
        }, [])
    console.log(doc2);
    
    return (
        <div className='home'>
            <div className="bar">
                <ul>
                    <li><a href="/"><img style={{ width: "300px" }} src={logo} alt="PointBlank" /></a></li>
                    <li><a href="/" id="heading">Live Score</a></li>
                </ul>
            </div>
            <div className="scoreboard">
                <table>
                    <tr>
                        <th id="Team1">
                            {doc2.Team1}
                        </th>
                        <th id="Team 2">
                            {doc2.Team2}
                        </th>
                    </tr>
                    <tr>
                        <td id="score1">
                            {doc2.Score1}
                        </td>
                        <td id="score2">
                            {doc2.Score2}
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Home