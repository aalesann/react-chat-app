import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatProvider";

export const ChatListMessage = () => {

    const { chatState, dispatch } = useContext(ChatContext);

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Esta función podría ser modificada para enviar el mensaje a tu backend o WebSocket
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
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        Sala de Chat
                    </div>
                    <div
                        className="card-body chat-messages"
                        style={{ height: '300px', overflowY: 'auto' }}
                    >
                        {
                            (chatState.mensajes.length === 0)
                                ? (
                                    <div className='mb-2 alert alert-info text-center'>
                                        Seleccione una conversación
                                    </div>
                                )
                                : (
                                    messages.map((msg, index) => (
                                        <div key={index} className="mb-2">{msg}</div>
                                    ))
                                )
                        }
                    </div>
                    <div className="card-footer">
                        <form>
                        <input
                            type="text"
                            className="form-control"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Escribe un mensaje..."
                        />
                        <button 
                            className="btn btn-primary mt-2"
                            disabled={(chatState.chatActivo ? false : true)} 
                            onClick={handleSendMessage}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
