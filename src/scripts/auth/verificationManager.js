//Kurt Krafft =>this page clears the form hard coded in and in the modal it also verifies whether a username or email is being used

import apiManager from  "./apiManager.js";
import domManager from "./domManager.js";
const clearModalManager = {
    clearModal:() => {
        
      const emailInput = document.getElementById('email-input');
      const usernameInput = document.getElementById('username-input');
      const password = document.getElementById('password-input');
      const confirmPassword = document.getElementById('confirm-password');
      const urlInput = document.getElementById('profPic');
      emailInput.value = "";
      usernameInput.value ="";
      password.value = "";
      confirmPassword.value = "";
      urlInput.value="";
    }
}


const formManager = {
    clearForm:() => {
      const email = document.getElementById('email-entry');
      const password =document.getElementById('password-entry');
      email.value = "";
      password.value = "";
    }
}

const verificationManager = {
    verifyEmail: (obj) => {
      apiManager.getUserProfileViaEmail(obj.email).then(arr=> {
        if (arr.length===0){
            domManager.errorBoxFiller();
            formManager.clearForm()
        }
       else if(arr[0].password===obj.password&arr[0].email===obj.email){
              sessionStorage.setItem('activeUsers', arr[0].id)


              const url = `${
            window.location.href.split('com')[0]
          }com#home`;
          window.history.pushState({path:url},'',url);
           document.getElementById("container").innerHTML = `<div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>`;

          }else if (arr[0].username===obj.username || arr[0].email===obj.email) {
              domManager.errorBoxFiller();
              formManager.clearForm()
          }  
      })
    },
    verifyNewUser:(obj) => {
        apiManager.getUserProfileViaEmail(obj.email).then(arr=> {
            if(arr.length<1){
                apiManager.getUserProfileViaUsername(obj.username).then(arr=> {
                    if (arr.length<1){
                        apiManager.addNewProfile(obj).then (arr=> {
                            sessionStorage.setItem('activeUsers', arr.id)
                            const url = `${
            window.location.href.split('com')[0]
          }com#home`;
          window.history.pushState({path:url},'',url);
                            document.getElementById("container").innerHTML = `<div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>`;
                        })
                        
                    }else {
                        alert("We're Sorry, it looks like your username has already been taken, please try again.")
                    }
                })
                
            } else {
                alert("We're Sorry, it looks like your email has already been taken, please try again.")
                clearModalManager.clearModal();
            }
        })
    }
}
export default verificationManager;
