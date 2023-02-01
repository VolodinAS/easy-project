const navigationConfigs = {
    'easy-project.main': '/easy-project',
    'easy-project.sign.in': '/sign-in',
    'easy-project.registration': '/registration',
    'easy-project.dashboard': '/dashboard',
    'easy-project.tasks': '/dashboard/:projectId',
    'easy-project.taskdetails': '/dashboard/:projectId/:taskId',
    'easy-project.newtask': '/dashboard/:projectId/new-task',
    'easy-project.edittask': '/dashboard/:projectId/edit-task/:taskId',
    'easy-project.dashboard.newproject': '/dashboard/new-project',
    'easy-project.dashboard.editproject': '/dashboard/edit-project/:projectId'
};

module.exports = {
    getNavigationsValue: (navigationKey) => {
        return navigationConfigs[navigationKey];
    },
    getAllFeatures: () => ({
        'easy-project': {
            'landing.video.url': {
                value: 'video-link'
            }
        }
    }),
    getConfigValue: () => '/api',
};