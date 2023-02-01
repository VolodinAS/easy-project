import React, { FC, useEffect, useState } from 'react';

import ConfirmModal from '../../../../components/confirm-modal';
import ProjectItem from '../project-item';
import DashboardTitle from '../dashboard-title';

import { ProjectsListContentStyled } from './styles';
import { useTranslation } from 'react-i18next';
import { ProjectType } from '../../../../data/models/common';
import { useDeleteProjectMutation } from '../../../../data/services/common';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { ErrorEmpty } from '../../../../components/error/no-results';

type ProjectListProps = {
    data: ProjectType[];
}

const ProjectsList:FC<ProjectListProps> = ({ data }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [deleteProject, setDeleteProject] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [projectIdForDelete, setProjectIdForDelete] = useState(null);
    const [deleteData, deleteDataRequest] = useDeleteProjectMutation();

    const toggleOverlay = (id) => {
        setDeleteProject(!deleteProject);
        setProjectIdForDelete(id);
    };

    const actionDeleteProject = () => {
        setConfirmDelete(!confirmDelete);
    };

    useEffect((() => {
        if ( deleteProject && confirmDelete )
        {
            deleteData(projectIdForDelete);
        }

        if ( !deleteProject )
        {
            setConfirmDelete(false);
            setProjectIdForDelete(null);
        }

        if ( deleteDataRequest.isSuccess )
        {
            setDeleteProject(false);
            setConfirmDelete(false);
            setProjectIdForDelete(null);
        }

    }), [confirmDelete, deleteData, deleteDataRequest.isSuccess, deleteProject, navigate, projectIdForDelete]);
    return (
        <div>
            {deleteProject && <ConfirmModal onClose={toggleOverlay} onConfirm={actionDeleteProject}>{t('easy-project.overlay.confirm.delete.project')}</ConfirmModal>}
            <DashboardTitle text={t('easy-project.dashboard.all.pageName')} />
            <ProjectsListContentStyled>
                {data.length>0 && data.map((project) => (
                    <ProjectItem
                        key={project.id}
                        deleteProject={() => toggleOverlay(project.id)}
                        id={project.id}
                        title={project.title}
                        created={project.created}
                        changed={project.changed}
                        author={project.author.login}
                    />
                ))}
                {data.length==0 && <>{<ErrorEmpty widthError='30vw' message={t('easy-project.dashboard.project.empty')}/>}</>}
            </ProjectsListContentStyled>
        </div>
    );
};

export default ProjectsList;
