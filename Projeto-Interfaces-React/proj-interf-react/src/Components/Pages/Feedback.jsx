import {Container, Form, FormGroup, Input, Label} from "reactstrap";
import {Select} from "../Form/Select.jsx";

export const Feedback = () => {
    return (
        <main>
            <Container>
                <h4>Escreva sobre você e sua região.</h4>
                <div className="mt-5">
                    <Form>
                        <div className="rounded p-4 border" style={{maxWidth: "30rem"}}>
                            <FormGroup>
                                <Label for="inputNome">Nome</Label>
                                <Input id="inputNome"
                                       name="nome"
                                       placeholder="Escreva seu nome"
                                       type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="inputEmail">Email</Label>
                                <Input id="inputEmail"
                                       name="email"
                                       placeholder="Escreva seu email"
                                       type="email"/>
                            </FormGroup>
                            <Select/>
                        </div>
                    </Form>
                </div>
            </Container>
        </main>
    );
}