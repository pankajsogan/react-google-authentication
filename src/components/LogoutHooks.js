import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '688025704310-mal2da29j49vmat22s1ad156fg6a93f8.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;
