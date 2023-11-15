import { useState, useEffect, useContext } from 'react';// Asegúrate de importar los estilos de Bootstrap
import { SocketContext } from '../context/SocketProvider';
import { ChatContext } from '../context/ChatProvider';
import { AuthContext } from '../context/AuthProvider';
import { types } from '../types/types';
import { ChatSideBar } from '../components/ChatSideBar';
import { ChatListMessage } from '../components/ChatListMessage';

export const ChatPage = () => {
  const { online, socket } = useContext(SocketContext);
  const { chatState, dispatch } = useContext(ChatContext);
  const { authState } = useContext(AuthContext);


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


  useEffect(() => {
    // Código para manejar mensajes entrantes...
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {/* Lista de Usuarios */}
        <ChatSideBar />

        <ChatListMessage />
      </div>
    </div>

  );
};
