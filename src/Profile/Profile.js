import React from "react";
import PropTypes  from "prop-types";
const Profile =({fullName,bio,profession,children,handleName})=>{
    return(
<div style={{textAlign:'center',border:'2px solid red', padding:'140px'}}>
    
    {children}
    <h1 style={{color:'yellow'}}>{fullName}</h1>
    <h2 style={{color:'greenyellow'}}>{profession}</h2>
    <p style={{color:'yellowgreen',fontFamily:'fantasy'}}>{bio}</p>
    <button style={{backgroundColor:"yellowgreen"}} onClick={() => handleName(fullName)}>PUSH ME!</button>
</div>
    );
};
Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    handleName:PropTypes.func.isRequired,
    children:PropTypes.element.isRequired
};
Profile.defaultProps={
    fullName:'No name available',
    bio:'No bio available',
    profession:'No profession available',
    children:<img src="" alt="no image available" style={{}}/>,
    handleName:(error)=>alert('error')
    
};

export default Profile;