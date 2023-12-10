import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageRoutes from "./routes/PageRoutes";
import ThemeProvider from "./contexts/ThemeContext";
import AuthProvider from "./contexts/AuthContext";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <PageRoutes />
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
