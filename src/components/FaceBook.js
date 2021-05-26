import React, { Component } from 'react'
import profiles from '../data/berlin.json';

class FaceBook extends Component {
    render() {
    
    return (
       
      <div className="container">
        {profiles.map((profile) => 
            <div key={profile.img} className="card d-flex justify-content-between align-items-center flex-row">
                <div>
                    <img style={{height: "150px"}} src={profile.img} alt={profile.firstName}/>
                </div>
                <div>
                    <p>First name: {profile.firstName}</p>
                    <p>Last name:{profile.firstName}</p>
                    <p>Country:{profile.country}</p>
                    <p>Type:{profile.isStudent ? "Student" : 'Teacher'}</p>
                </div>
            </div>
        )}
      </div>
    )
  }
}

export default FaceBook
