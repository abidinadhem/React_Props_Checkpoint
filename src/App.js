import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile
        fullName="laabidi nadhem"
        bio="i am a crazy one piece fan"
        profession="Web Developer"
        handleName={(name) => alert(`Hello, my name is ${name}`)}
      >
        <img src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/330924133_762722348197351_8726454822726822412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BH7EEmxySpoAX8UDzfL&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfC7SETVLL4R1GAyA3UFlaMeGMzyVn_rs4z7x8zWyfigfw&oe=63F3EA6F" alt="Profile" style={{ width: '200px' }} />
      </Profile>
    </div>
  );
}

export default App;
