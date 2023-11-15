import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatProvider";

export const ChatForm = () => {
    const { chatState, dispatch } = useContext(ChatContext);


    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');


    const sendMessage = (message) => {
        // Aquí iría el código para enviar el mensaje
        console.log("Mensaje enviado: ", message);
    };

    // Esta función maneja el envío de mensajes
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            sendMessage(newMessage);
            setNewMessage('');
        }
    };
    return (
        <>
            <div className="card-footer">
                <form>
                    <input
                        type="text"
                        className="form-control"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Escribe un mensaje..."
                        disabled={(chatState.chatActivo ? false : true)}
                    />
                    <button
                        className="btn btn-primary mt-2"
                        disabled={(chatState.chatActivo ? false : true)}
                        onClick={handleSendMessage}>Enviar</button>
                </form>
            </div>
        </>
    )
}
