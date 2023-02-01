const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        "easy-project.main": "/easy-project",
        "easy-project.sign.in": "/sign-in",
        "easy-project.registration": "/registration",
        "easy-project.dashboard": "/dashboard",
        "easy-project.dashboard.newproject": "/dashboard/new-project",
        "easy-project.dashboard.editproject": "/dashboard/edit-project/:projectId",
        "easy-project.tasks": "/dashboard/:projectId",
        "easy-project.taskdetails": "/dashboard/:projectId/:taskId",
        "easy-project.newtask": "/dashboard/:projectId/new-task",
        "easy-project.edittask": "/dashboard/:projectId/edit-task/:taskId",
        "easy-project.reset.password": "/reset-password"
    },
    features: {
        'easy-project': {
            // add your features here in the format [featureName]: { value: string }
            
            "landing.video.url": {
                "on": true,
                "value": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "key": "landing.video.url"
            }
        }
    },
    config: {
        "easy-project.api-base-url": "/api"
        // "easy-project.api-base-url": "http://localhost:8043/easy-project"
        // "easy-project.api-base-url": "https://b1.inno-js.ru/multystub/easy-project/"
    }
}
