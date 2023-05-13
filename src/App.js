import './App.css';
import Profile from './components/Profile';

function App() {
  const profil ={
    fullName: "Nihel Hacine",
    Profession: "Developpeuse web",
    bio: "Never give up ! ",
  }

  const handleName = (x) => alert ("c'est le profil de "+profil.fullName);
  return (
<div>
    <Profile profil={profil} handleName={handleName}><img src='.\img1.JPG' alt=''/></Profile>
</div>
  );
}

export default App;
