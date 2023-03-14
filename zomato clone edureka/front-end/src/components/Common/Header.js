import React, { useState } from 'react'
import '../../styles/Header.css'
import Modal from 'react-modal';
import FacebookLogin from '@greatsumini/react-facebook-login';
import GoogleLogin from 'react-google-login';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')

const responseGoogle = (response) => {
  console.log(response);
}
const onSuccess = (res) => {
  console.log('success:', res);
};
const onFailure = (err) => {
  console.log('failed:', err);
};



export default function Header() {
  const [isLoginModalOpen, setLoginModal] = useState(false)
  const [isSignUPModalOpen,setSignUpModal]= useState(false)
  return (
    <div>

      <header className="header">

        <div className='logo'>
          <p> e!</p>
        </div>

        <span className="buttonContainer">
          <button className="login" onClick={() => setLoginModal(true)}>Login</button>
          <button className="createanaccount"onClick={() => setSignUpModal(true)}>create an account</button>
        </span>
      </header>
      <Modal
        isOpen={isLoginModalOpen}
        style={customStyles}
      >

        <h2>Login
          <button className='btn1' onClick={() => setLoginModal(false)}>x</button>
        </h2>

       <div>
         <form>
            <input placeholder='Enter your Username' type="text"/> <br/><br/>
            <input placeholder='Enter your Password' type="password"/> <br/><br/>
            <button className='btn btn-primary'>Login</button>
         </form>
       </div>
          
          <br/>

        <div>
          <FacebookLogin
            appId="100089998636493"
            //autoLoad={false}
            fields="name,email,picture"
            onSuccess={(response) => {
              console.log('Login Success!', response);
            }}
            style={{
              backgroundColor: '#4267b2',
              color: '#fff',
              fontSize: '16px',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
            }}
          />
        </div>
       <br/>
        <div>
          <GoogleLogin
            clientId="844955425524-3bhi9vdjeph5dm5m9ifr17a47ak5eips.apps.googleusercontent.com" 
            buttonText="Login with GOOGLE"
            className='google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <br/>
        <span>Don't have an account? <span className='Signup'>Sign UP</span></span>
      
      </Modal>

      <Modal
      isOpen={isSignUPModalOpen}
      style={customStyles}
      >
         <h2>Sign UP
          <button className='btn1' onClick={() => setSignUpModal(false)}>x</button>
        </h2>

       <div>
         <form>
            <input placeholder='Enter Username or Email' type="text"/> <br/><br/>
            <input placeholder='Create Password' type="Password"/> <br/><br/>
            <button className='btn btn-primary'>Sign UP</button>
         </form>
       </div>
          
       <br/>
        <div>
          <GoogleLogin
            clientId="844955425524-3bhi9vdjeph5dm5m9ifr17a47ak5eips.apps.googleusercontent.com" 
            buttonText="CONTINUE WITH GOOGLE"
            className='google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <br/>
        <span>Already have an account? <span className='LOGIN'>Login</span></span>
       

      </Modal>
      </div>
  )
}

