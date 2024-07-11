import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (page) => {
        navigate(page);
    }

    const getNavLinkClass = (page) => {
        return location.pathname === page ? 'nav-link pointer active' : 'nav-link pointer';
    }

    return (
        <>
            <ul className="nav nav-tabs page-header-tabs" id="projectsTab" role="tablist">
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-overview')} onClick={() => { goToPage('/project-overview') }} >Overview</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-files')} onClick={() => { goToPage('/project-files') }} >Files</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-activity')} onClick={() => { goToPage('/project-activity') }} >Activity</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-teams')} onClick={() => { goToPage('/project-teams') }} >Teams</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-setting')} onClick={() => { goToPage('/project-setting') }} >Settings</a>
                </li>
            </ul>
        </>
    )
}
