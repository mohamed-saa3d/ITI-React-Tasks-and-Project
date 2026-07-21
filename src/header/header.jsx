import "./header.css";

export default function Header() {
    return (
        <header className="card header">
            <div className="header-info">
                <div className="header-title-group">
                    <h1 className="header-title">
                        Mohamed Saad
                    </h1>
                    <span className="badge badge-primary">
                        React Developer
                    </span>
                </div>
                <p className="header-description">
                    Building clean, responsive, and beginner-friendly web applications with React & Pure CSS.
                </p>
            </div>

            <div className="header-actions">
                <span className="badge badge-success">
                    <span className="badge-dot"></span>
                    Available for Work
                </span>
            </div>
        </header>
    );
}