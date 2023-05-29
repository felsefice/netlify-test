import './App.css';
import { useState } from "react";

const App = () => {
  const [candidate1Votes, setCandidate1Votes] = useState(0);
  const [candidate2Votes, setCandidate2Votes] = useState(0);

  const totalVotes = candidate1Votes + candidate2Votes;
  const candidate1Percentage = totalVotes !== 0 ? ((candidate1Votes / totalVotes) * 100).toFixed(2) : 0;
  const candidate2Percentage = totalVotes !== 0 ? ((candidate2Votes / totalVotes) * 100).toFixed(2) : 0;

  const handleCandidate1VotesChange = (event) => {
    const votes = parseInt(event.target.value);
    setCandidate1Votes(votes);
  };

  const handleCandidate2VotesChange = (event) => {
    const votes = parseInt(event.target.value);
    setCandidate2Votes(votes);
  };

  return (
    <div className="election-analysis-container">
      <h2>SEÇİM ANALİZİ</h2>
      <div className="candidates-wrapper">
        <div className="candidate-container">
          <img src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/344220800_602879961786401_5507268384334804504_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wcfY32iEbygAX83flCn&_nc_ht=scontent.fist13-1.fna&oh=00_AfCcfnjijo2nRXUiF-WT-s_9dV1QByhPD60E-pVy_Eb6KA&oe=6478A505" style={{width:250, height: 250}} alt="Candidate 1" />
          <h3>RECEP TAYYİP ERDOĞAN</h3>
          <input type="number" value={candidate1Votes} onChange={handleCandidate1VotesChange} />
          <p>Yüzdelik: {candidate1Percentage}%</p>
        </div>
        <div className="candidate-container">
          <img src="https://media.npr.org/assets/img/2023/04/28/gettyimages-1485793502_wide-adcac516a97a8cef9b21e550c3981f8c2d63d911-s1400-c100.jpg" style={{width:250, height: 250}} alt="Candidate 2" />
          <h3>KEMAL KILIÇDAROĞLU</h3>
          <input type="number" value={candidate2Votes} onChange={handleCandidate2VotesChange} />
          <p>Yüzdelik: {candidate2Percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default App;