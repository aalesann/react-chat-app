import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider"
import { SocketContext } from "../context/SocketProvider";
import { useForm } from "../hooks/useForm";

// TODO: Diseñar y desarrollar la interfaz de chat
export const ChatPage = () => {

  const { authState } = useContext(AuthContext);
  const { socket, online } = useContext(SocketContext);
  const [listMessage, setListMessage] = useState([]);

  const { values, handleInputChange } = useForm({});

  useEffect(() => {
    socket?.on('new-message', (payload) => {
      setListMessage([...listMessage, ...payload]); 
    })
  }, [socket, online]);


  console.log(socket)

  const handleSubmit = (e) => {
    e.preventDefault();
    socket?.emit('new-message', {
      from: authState.user.username,
      message: values.message
    })

    // reset()
  }


  return (
    <div className="container">
      <h1>Chat</h1>

      <div className="row">
        
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Usuarios</h5>
              <ul className="list-group">
                <li className="list-group-item">{ authState.user.username}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Chat</h5>

              <ul className="list-group">
                {
                  listMessage.map((message, index) => (
                    <li className="list-group-item" key={index}>
                      <span className="badge bg-primary">{message.from}</span>: {message.message}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="card-footer">
              <form 
                onSubmit={handleSubmit}

              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe tu mensaje"
                  name="message"
                  value={values.message}
                  onChange={handleInputChange} 
                />
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
