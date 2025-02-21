import logotipo from "@image/lion-react.svg";

export const Footer = () => {
    return (
        <footer>
            <div className="footer debug">
                <img src={logotipo} alt="logotipo" className="img-fluid my-3"/>
                <p>Projeto de Interfaces com React</p>
                <p>MIT 2025 Desenvolvimento Web Full Stack</p>
            </div>
        </footer>
    );
}