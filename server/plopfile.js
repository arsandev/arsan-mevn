module.exports = function (plop) {
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
            templateFile: 'templates/RouterAPI.hbs'
        },
        {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'templates/Model.hbs'
        }]
    })

    plop.setGenerator('api:resource', {
        description: 'create model and router with CRUD structure',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'your model and router\'s name'
        }],
        actions: [
          {
            type: 'add',
            path: 'routers/{{name}}Router.js',
            templateFile: 'templates/RouterAPIResource.hbs'
        },
        {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'templates/Model.hbs'
        }]
    })

    plop.setGenerator('router', {
        description: 'create router',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'your router\'s name'
        }],
        actions: [
          {
            type: 'add',
            path: 'routers/{{name}}Router.js',
            templateFile: 'templates/Router.hbs'
        }]
    })

    plop.setGenerator('model', {
        description: 'create model',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'your model\'s name'
        }],
        actions: [
          {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'templates/Model.hbs'
        }]
    })
}
