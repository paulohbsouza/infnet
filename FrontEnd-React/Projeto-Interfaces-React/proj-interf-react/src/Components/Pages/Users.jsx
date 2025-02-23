import {Alert, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {useEffect, useState} from "react";
import {UserCard} from "../Form/UserCard.jsx";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);
    const handleModal = (user) => {
        setUserSelected(user);
        toggleModal();
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://api.npoint.io/b47cdede0b35a1f66c4c");
                if (!response.ok) {
                    throw new Error("Algo deu errado!");
                }
                const data = await response.json();
                if (!data || typeof data !== "object") {
                    throw new Error("Formato de resposta inválido");
                }
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return (
        <main>
            <Container>
                <div className="">
                    <div className="mx-auto">
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Filtrar por região</Label>
                                <Input id="exampleSelect"
                                       bsSize="lg"
                                       name="select"
                                       type="select">
                                    <option>Selecione...</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="my-5">
                        { users.length > 0 ? (
                                <div className="d-flex flex-wrap justify-content-center gap-5">
                                    {users.map((user) => (
                                        <div key={ user.id } className="">
                                            <UserCard user={user} onClick={()=>handleModal(user)} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Alert color="secondary">
                                    Que pena. A lista de usuários esta vazia! =/
                                </Alert>
                            )}
                    </div>
                </div>
            </Container>
            <Modal isOpen={modalOpen} toggle={toggleModal} centered>
                <ModalHeader toggle={toggleModal}>Overview</ModalHeader>
                <ModalBody>
                    {userSelected && (
                        <>
                            <h4>
                                {userSelected.nome}
                            </h4>
                            <p><em>
                                {userSelected.resumo}
                            </em></p>
                        </>
                    )}
                </ModalBody>
            </Modal>
        </main>
    );
}