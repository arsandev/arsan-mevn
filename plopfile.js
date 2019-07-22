module.exports = function (plop) {
    plop.setGenerator('api', {
        description: 'auto create models and routers',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'your model\'s name'
        }],
        actions: [
          {
              type: 'add',
              path: 'server/models/{{name}}.js',
              templateFile: 'server/templates/models.hbs'
          },
          {
              type: 'add',
              path: 'server/routers/{{name}}Router.js',
              templateFile: 'server/templates/routers.hbs'
          }
        ]
    });
};
