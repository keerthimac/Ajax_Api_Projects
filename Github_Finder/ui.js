class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repoData = document.getElementById('repos');
  }
  //display profile in
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}" />
        <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
        <span class="badge badge-warning">Public Gists:${user.public_gists}</span>
        <span class="badge badge-danger">followers:${user.followers}</span>
        <span class="badge badge-success">following:${user.following}</span>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item">company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
    `;
  }

  //show user repos
  showRepos(repos) {
    let output = '';
    repos.forEach(function (repo) {
      output += `
          <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-danger">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>`;
    });
    this.repoData.innerHTML = output;
  }

  //show alert
  showAlert(massage, className) {
    //Clear any remaining alerts
    this.clearAlert();
    //create element
    const div = document.createElement('div');
    //add classname
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(massage));
    //get Perent
    const container = document.querySelector('.searchContainer');
    //Get searchbox
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);
    //timeout afer 3s
    setTimeout(function clearError() {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //clear profile
  clearProfile() {
    this.profile.innerHTML = '';
    this.repoData.innerHTML = '';
  }
}
