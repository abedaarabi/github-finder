const http = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  //get input Text
  const userText = e.target.value;

  if (userText !== "") {
    http.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        ui.showAlret("Project Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear Profile
    ui.clearProfile(userText);
  }
  //   e.preventDefault();
});
