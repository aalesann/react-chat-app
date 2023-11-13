import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { Navbar } from "../components/Navbar"
import { ChatPage } from "../pages/ChatPage"
import { BackAndForward } from "../components/BackAndForward"

export const MainRoutes = () => {
  return (
    // TODO: Desarrollar Navbar
    // TODO: Desarrollar Sidebar
    // TODO: Desarrollar Footer
    // TODO: Diseñar y desarrollar Dashboard para las rutas privadas
    <>
      <Navbar />
      <BackAndForward />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>

    // Footer
  )
}
