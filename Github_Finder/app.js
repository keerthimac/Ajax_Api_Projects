//init github
const github = new Github();
//init ui
const ui = new UI();

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;
  //   console.log(userText);
  if (userText !== '') {
    // Make http call

    github.getUser(userText).then((data) => {
      console.log(data);
      if (data.profile.message === 'Not Found') {
        //Show Alert when user not found
        console.log('not found');
        ui.clearProfile();
        ui.showAlert('user not found', 'alert alert-danger');
      } else if (
        data.profile.message ===
        "API rate limit exceeded for 112.134.57.49. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
      ) {
        //Show Alert when user not found
        console.log('API rate limit exceeded');
        ui.showAlert('API rate limit exceeded', 'alert alert-danger');
      } else {
        //Show Profile
        ui.showProfile(data.profile);
        //show Repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});
