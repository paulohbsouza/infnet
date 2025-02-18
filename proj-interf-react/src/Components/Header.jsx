import logotipo from "@image/lion-react.svg";

export const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="d-flex justify-content-center h-100">
                    <img src={logotipo} alt="logotipo" className="img-fluid position-absolute mt-4"/>
                </div>
            </div>
            <nav>
                <div className="container text-center my_nav">
                    <div className="row align-items-center text-dark">
                        <div className="col">
                            lion form aplication
                        </div>
                        <div className="col">
                            start | form | about
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}