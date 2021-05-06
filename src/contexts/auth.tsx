import { createContext, useState, useEffect, useContext } from "react";
import api from "./../services/api";
import { toast } from "react-toastify";

interface User {
  name: string;
  email: string;
  id: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({ email, password }: any): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@Happet:user");
      const storagedToken = await localStorage.getItem("@Happet:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
    }
    loadStoragedData();
  }, []);

  async function signIn({ email, password }: any) {
    setLoading(true);
    const { data } = await api.post("/authenticate", {
      email,
      password,
    });
    if (data.error) {
      toast.warn(data.error);
      setLoading(false);
      return false;
    } else {
      toast.success("Login Efetuado com Sucesso!");
      setUser(data.user);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      localStorage.setItem("@Happet:user", JSON.stringify(data.user));
      localStorage.setItem("@Happet:token", JSON.stringify(data.token));
      setLoading(false);
      return true;
    }
  }

  async function signOut() {
    localStorage.removeItem("@Happet:user");
    localStorage.removeItem("@Happet:token");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
