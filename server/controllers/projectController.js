
const projectController = {}

projectController.newProject = (req, res, next) => {
  const userId = req.body.user_id;
  // create new project with userID in db
  // db.one('INSERT INTO projects() VALUES($1, $2) RETURNING id', ['John', true])
  //   .then(data => console.log(data.id))
  //   .catch(error => console.log('ERROR:', error));

  const newProject = {
    project_id: 1,
    node_id: 2,
    stateful: false,
    state_props: {},
    count: 1,
  };
  return res.json(newProject);
};

projectController.retrieveProject = (req, res, next) => {
  const projectId = req.params.projectid;
  // query db for 
}

module.exports = projectController;
