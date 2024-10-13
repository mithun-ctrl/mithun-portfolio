import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Achievement } from "./pages/Achievement";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/Layout/AdminLayout";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacts";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievement" element={<Achievement />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}/>
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/contacts" element={<AdminContacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;