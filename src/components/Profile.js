import React from 'react'

function Profile(props) {
  return (
    <div className='profilmain'>
     <div className='couv'></div>
     {/* <img src='.\img1.JPG' alt=''/>   */}
     {props.children}
     <div className='txt'>
     <h2>{props.profil.fullName}</h2> 
     <h3>{props.profil.Profession}</h3>
     <p>{props.profil.bio}</p>
     </div>
     <button onClick={() => props.handleName()}>c'est qui? </button>
    </div>
  )
}

export default Profile