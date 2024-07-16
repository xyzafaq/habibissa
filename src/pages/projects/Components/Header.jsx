import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (page) => {
        navigate(page);
    }

    return (
        <>
            <ul className="nav nav-tabs page-header-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="/projects">
                        Projects <span className="badge bg-soft-dark text-dark ms-1">24</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./projects-timeline.html">
                        Timeline
                    </a>
                </li>
            </ul>
        </>
    )
}
