module.exports = function (plop) {
    // controller generator
    plop.setGenerator('api', {
        description: 'create model and router',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'your model and router\'s name'
        }],
        actions: [
          {
            type: 'add',
            path: 'routers/{{name}}Router.js',
            templateFile: 'plop-templates/Router.hbs'
        },
        {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'plop-templates/Model.hbs'
        }]
    });

    plop.setGenerator('api:resource', {
        description: 'create model and router',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'your model and router\'s name'
        }],
        actions: [
          {
            type: 'add',
            path: 'routers/{{name}}Router.js',
            templateFile: 'plop-templates/RouterResource.hbs'
        },
        {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'plop-templates/Model.hbs'
        }]
    });
};
