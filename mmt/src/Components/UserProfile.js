import React, { Component } from 'react';
import * as firebase from 'firebase';

const UserProfile = ({ authUser }) =>
    <div>
        <LoadProfile authUser={authUser} />
    </div>

const LoadProfile = ({ authUser }) =>
    <div className="callout large" id="callout" >
        <div className="grid-container full">
            <div className="cell medium-6 large-8" id="leftSide">
                {firebase.database().ref().child("Users").child(authUser.uid)
                    .on("value", function (snapshot) {
                        console.log(snapshot.child("Name").val());
                        var name = document.createTextNode(snapshot.child("Name").val() + " " + snapshot.child("Last Name").val());
                        name.id = "fullName";
                        var nick = document.createTextNode(snapshot.child("Username").val());
                        nick.id = "username";
                        var email = document.createTextNode("Email: " + snapshot.child("Email").val());
                        var since = document.createTextNode("Member since: " + snapshot.child("Since").val());
                        document.getElementById("leftSide").appendChild(nick);
                        document.getElementById("leftSide").appendChild(name);
                        document.getElementById("leftSide").appendChild(email);
                        document.getElementById("leftSide").appendChild(since);
                    })}
            </div>
            <div className="cell medium-6 large-4" id="rightSide">
                <h2 id="jobs">Your Active jobs</h2>
            </div>
        </div>
        {firebase.database().ref().child("Users").child(authUser.uid)
            .on("value", function (snapshot) {
                console.log(snapshot.child("Name").val());
                var name = document.createTextNode(snapshot.child("Name").val() + " " + snapshot.child("Last Name").val());
                name.id = "fullName";
                var nick = document.createTextNode(snapshot.child("Username").val());
                nick.id = "username";
                var email = document.createTextNode("Email: " + snapshot.child("Email").val());
                var since = document.createTextNode("Member since: " + snapshot.child("Since").val());


                var jobsRef = firebase.database().ref().child("Users").child(authUser.uid).child("Jobs");
                
                snapshot.child("Jobs").forEach(jobsSnap => {

                    var jobType = jobsSnap.child("Job Type").val();
                    var zip = jobsSnap.child("Address").val();
                    var time = jobsSnap.child("Time").val();
                    var price = jobsSnap.child("Price").val();
                    
                    var jobDiv = document.createElement("div");
                    jobDiv.className = "myJobs";

                    jobDiv.appendChild(document.createTextNode(jobType));
                    jobDiv.appendChild(document.createTextNode(zip));
                    jobDiv.appendChild(document.createTextNode(time));
                    jobDiv.appendChild(document.createTextNode(price));

                    document.getElementById("rightSide").appendChild(jobDiv);
                });
                document.getElementById("leftSide").appendChild(nick);
                document.getElementById("leftSide").appendChild(name);
                document.getElementById("leftSide").appendChild(email);
                document.getElementById("leftSide").appendChild(since);
            })}
    </div>

export default UserProfile;