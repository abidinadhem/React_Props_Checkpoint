import './App.css';
import Profile from './Profile/Profile';
import Image from './Profile/Image';
function App() {
  return (
    <div className="App">
      <Profile
fullName="Laabidi Nadhem"
bio="i am a crazy one piece fan"
profession="Web Developer"
handleName={(name) => alert(`Hello, my name is ${name}`)}
>
<Image/>
</Profile>
    </div>
  );
}

export default App;
