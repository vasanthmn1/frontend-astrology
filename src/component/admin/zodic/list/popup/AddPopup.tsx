import { HelperChild } from "../helper";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CmdOptionHelper } from "../../../../../abstract/CmdOptionHelper";
import { ZodiacMain } from "../ZodiacMain";

interface ThisProps {
    show: boolean;
}

export class AddPopup extends CmdOptionHelper<ZodiacMain, ThisProps> {
    render() {
        let option = this.props.option;
        let parent = this.props.parent;

        const handleImage = (e: any) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                setFileToBase(file);
            } else {
                console.error("Please select a valid image file");
            }
        };

        const setFileToBase = (file: any) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                parent.action.changeState({
                    add: {
                        ...parent.state.add,
                        photo: reader.result,
                    }
                });
            };
        };



        // const handleSave = () => {
        //     const title = parent.state.add.title;
        //     const desc = parent.state.add.desc;
        //     const photo = parent.state.add.photo;
        //     parent.action.saveChanges({ title, desc, photo });
        // };

        return (
            <Modal show={option.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Image Uplaod (10 MB)</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <input
                            type="text"
                            defaultValue={parent.state.add.title}
                            name="title"
                            onChange={(e) => parent.action.nestedChangeInput(e, "add")}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="desc"

                            value={parent.state.add.desc}
                            onChange={(e) => parent.action.nestedChangeInput(e, "add")}
                        />
                    </div>
                    <input
                        id="fileInput"
                        // style={{ display: 'none' }}
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={parent.action.request.togglePopup}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={parent.action.submit.submit}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
