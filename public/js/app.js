var projects = [];

function Project(projectObjectData) {
  this.title = projectObjectData.title;
  this.Image = projectObjectData.Image;
  this.Description = projectObjectData.Description;
  this.Url = projectObjectData.Url;
}

rawData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
