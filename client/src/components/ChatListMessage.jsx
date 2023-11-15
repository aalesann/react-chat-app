import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatProvider";
import { AuthContext } from "../context/AuthProvider";
import { ChatForm } from "./ChatForm";

export const ChatListMessage = () => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { authState } = useContext(AuthContext);



    // Esta función podría ser modificada para enviar el mensaje a tu backend o WebSocket
    

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
                            (!chatState.chatActivo)
                                ? (
                                    <div className='mb-2 alert alert-info text-center'>
                                        Seleccione una conversación
                                    </div>
                                )
                                : (
                                    chatState.mensajes
                                    .filter( msg => 
                                            msg.from === authState.user.uid && 
                                            msg.to === chatState.chatActivo ||
                                            msg.from === chatState.chatActivo &&
                                            msg.to === authState.uid)
                                    .map(({ from, to, message }, index) => (
                                            (from === authState.user.uid)
                                            ? (
                                            <div key={index} 
                                                className="mb-2 alert alert-success">
                                                { message }
                                            </div>
                                            )
                                            : (
                                            <div key={index} className="mb-2 alert alert-secondary">
                                                   { message } 
                                            </div>
                                            )
                                    ))
                                )
                        }
                    </div>
                    <ChatForm />
                </div>
            </div>
        </>
    )
}
