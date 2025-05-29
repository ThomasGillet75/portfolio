import './header.style.css';
import GithubIcon from "../../atoms/Icons/GithubIcon.tsx";
import LinkedinIcon from "../../atoms/Icons/LinkedinIcon.tsx";
import Button from "../../atoms/Button/Button.tsx";

function Header() {
    const openInNewWindow = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="header center">
            <Button onClick={() => openInNewWindow('https://github.com/ThomasGillet75')}>
                <GithubIcon />
            </Button>
            <Button onClick={() => openInNewWindow('https://www.linkedin.com/in/thomas-gillet-profile/')}>
                <LinkedinIcon />
            </Button>
        </div>
    );
}

export default Header;