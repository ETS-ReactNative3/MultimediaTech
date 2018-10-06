import React, { Component } from 'react';
import * as firebase from 'firebase';

const UserProfile = ({ authUser}) =>
    <div>
        <LoadProfile authUser={authUser} />
    </div>

const LoadProfile = ( { authUser } ) =>
    <div className="callout large" id="callout" >
            {firebase.database().ref().child("Users").child(authUser.uid)
                .on("value", function (snapshot){
                    console.log(snapshot.child("Name").val());
                    var name = document.createTextNode(snapshot.child("Name").val() + " " + snapshot.child("Last Name").val());
                    name.id = "fullName";
                    var nick = document.createTextNode(snapshot.child("Username").val());
                    nick.id = "username";
                    var email = document.createTextNode("Email: " + snapshot.child("Email").val());
                    var since = document.createTextNode("Member since: "  + snapshot.child("Since").val());
                    document.getElementById("callout").appendChild(nick);
                    document.getElementById("callout").appendChild(name);
                    document.getElementById("callout").appendChild(email);
                    document.getElementById("callout").appendChild(since);
                    })}
    </div>

export default UserProfile;