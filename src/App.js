import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  let info = { bio: "hi i am nebras", profession: "web developer" };
  let images =
    "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg";
  let alerrt = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div className="App">
      <Profile
        names={info.names}
        bio={info.bio}
        profession={info.profession}
        alerrt={alerrt}
      >
        {images}
      </Profile>
    </div>
  );
}

export default App;
