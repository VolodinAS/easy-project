/* eslint-disable @typescript-eslint/no-var-requires */
const router = require('express').Router();

const stubs = {
    getProjects: 'success',
    singleProject: 'success',
    newProject: 'success',
    editProject: 'success',
    deleteProject: 'success',
    postRegistration: 'success',
    postLogin: 'success',
    getTasks: 'success',
    getTaskById: 'success',
    taskCreate: 'success',
    taskEdit: 'success',
};

router.get('/projects', (req, res) => {
    res.status(stubs.getProjects === 'error' ? 400 : 200).send(require(`../json/dashboard/projects-list/${stubs.getProjects}.json`));
});

router.get('/projects/:projectId', (req, res) => {
    res.status(stubs.singleProject === 'error' ? 400 : 200).send(require(`../json/dashboard/single-project/${stubs.singleProject}.json`));
});

router.post('/projects/new', (req, res) => {
    res.status(stubs.newProject === 'error' ? 400 : 200).send(require(`../json/dashboard/new-project/${stubs.newProject}.json`));
});

router.post('/projects/edit', (req, res) => {
    res.status(stubs.editProject === 'error' ? 400 : 200).send(require(`../json/dashboard/edit-project/${stubs.editProject}.json`));
});

router.post('/projects/delete', (req, res) => {
    res.status(stubs.deleteProject === 'error' ? 400 : 200).send(require(`../json/dashboard/delete-project/${stubs.deleteProject}.json`));
});

router.post('/registration', (req, res) => {
    res.status(stubs.postRegistration === 'success' ? 200 : 400).send(require(`../json/signup/${stubs.postRegistration}.json`));
});

router.post('/sign-in', (req, res) => {
    res.status(stubs.postLogin === 'success' ? 200 : 400).send(require(`../json/signin/${stubs.postLogin}.json`));
});

router.get('/tasks/:projectId', (req, res) => {
    res.status(stubs.getTasks === 'error' ? 400 : 200).send(require(`../json/dashboard/task-list/${stubs.getTasks}.json`));
});

router.get('/tasks/:projectId/:taskId', (req, res) => {
    res.status(stubs.getTaskById === 'error' ? 400 : 200).send(require(`../json/dashboard/task-list/single-task/${stubs.getTaskById}.json`));
});

router.post('/tasks/create', (req, res) => {
    res.status(stubs.taskCreate === 'error' ? 400 : 200).send(require(`../json/dashboard/new-task/${stubs.taskCreate}.json`));
});

router.post('/tasks/edit', (req, res) => {
    res.status(stubs.taskEdit === 'error' ? 400 : 200).send(require(`../json/dashboard/edit-task/${stubs.taskEdit}.json`));
});

router.get('/admin/set/:param/:value', (req, res) => {
    const { param, value } = req.params;
    stubs[param] = value;

    res.send('');
});

router.get('/admin', (req, res) => {

    function link(label, key, value){
        return (`<button onClick="fetch('/api/admin/set/${key}/${value}');location.reload()">${label}</button>`);
    }

    res.send(`
	<body>
		<h1>Стабовая админка</h1>

		<section>
			<h2>Список проектов - ${stubs.getProjects}</h2>
			<ul>
				<li>${link('Успешно', 'getProjects', 'success')}</li>
				<li>${link('Список пуст', 'getProjects', 'empty')}</li>
				<li>${link('Ошибка', 'getProjects', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Создание нового проекта - ${stubs.newProject}</h2>
			<ul>
				<li>${link('Проект создан', 'newProject', 'success')}</li>
				<li>${link('Ошибка создания проекта', 'newProject', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Данные одного проекта - ${stubs.singleProject}</h2>
			<ul>
				<li>${link('Данные проекта получены', 'singleProject', 'success')}</li>
				<li>${link('Ошибка получения данных проекта', 'singleProject', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Удаление проекта - ${stubs.deleteProject}</h2>
			<ul>
				<li>${link('Проект успешно удалён', 'deleteProject', 'success')}</li>
				<li>${link('Ошибка при удалении проекта', 'deleteProject', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Редактирование проекта - ${stubs.editProject}</h2>
			<ul>
				<li>${link('Редактирование проекта успешно', 'editProject', 'success')}</li>
				<li>${link('Ошибка при редактировании проекта', 'editProject', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Список задач проекта - ${stubs.getTasks}</h2>
			<ul>
				<li>${link('Успешно', 'getTasks', 'success')}</li>
				<li>${link('Список пуст', 'getTasks', 'empty')}</li>
				<li>${link('Ошибка', 'getTasks', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Получить задачу по ID - ${stubs.getTaskById}</h2>
			<ul>
				<li>${link('Успешно', 'getTaskById', 'success')}</li>
				<li>${link('Ошибка', 'getTaskById', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Создать задачу - ${stubs.taskCreate}</h2>
			<ul>
				<li>${link('Успешно', 'taskCreate', 'success')}</li>
				<li>${link('Ошибка', 'taskCreate', 'error')}</li>
			</ul>
		</section>

		<section>
			<h2>Редактировать задачу - ${stubs.taskEdit}</h2>
			<ul>
				<li>${link('Успешно', 'taskEdit', 'success')}</li>
				<li>${link('Ошибка', 'taskEdit', 'error')}</li>
			</ul>
		</section>

        <section>
			<h2>Регистрация - ${stubs.postRegistration}</h2>
			<ul>
				<li>${link('Успешная регистрация', 'postRegistration', 'success')}</li>
				<li>${link('Ошибка регистрации', 'postRegistration', 'error-form')}</li>
				<li>${link('Ошибка - email уже занят', 'postRegistration', 'error-exist-email')}</li>
                <li>${link('Ошибка - логин уже занят', 'postRegistration', 'error-exist-login')}</li>
			</ul>
		</section>

		<section>
			<h2>Авторизация - ${stubs.postLogin}</h2>
			<ul>
				<li>${link('Успешная авторизация', 'postLogin', 'success')}</li>
				<li>${link('Ошибка - Почта или пароль введены неправильно', 'postLogin', 'error')}</li>
			</ul>
		</section>
	</body>
	`);
});

module.exports = router;
