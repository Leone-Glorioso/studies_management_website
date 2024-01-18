import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';


const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [lesson, setLesson] = useState(null);
    const [type, typeSet] = useState(0);
    const cookies = new Cookies();

    const userIsAuthenticated = () => {
        return cookies.get('user') !== undefined;
    };


    const userLogin = (user) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        cookies.set('user', JSON.stringify(user), {
            expires: new Date(Date.now() + 5000000)
        })
        setUser(user);
    };


    const getUser = () => {
        return cookies.get('user')
    }


    const userLogout = () => {
        // Clear the user data from local storage
        sessionStorage.removeItem("user");
        cookies.remove('user')
        setUser(null);
    };

    const lessonSetter = (lesson) => {
        sessionStorage.setItem("lesson", JSON.stringify(lesson));
        cookies.set('lesson', JSON.stringify(lesson), {
            expires: new Date(Date.now() + 1000000)
        })
        setUser(user);
    }

    const getLesson = () => {
        return cookies.get('lesson')
    }

    const isLessonSet = () => {
        return cookies.get('lesson') !== undefined;
    };

    const getType = () => {
        return cookies.get('type')
    }

    const setType = (type) => {
        sessionStorage.setItem("type", JSON.stringify(type));
        cookies.set('type', JSON.stringify(type), {
            expires: new Date(Date.now() + 1000000)
        })
        typeSet(type);
    }

    const contextValue = {
        user,
        userIsAuthenticated,
        userLogin,
        userLogout,
        getUser,
        lesson,
        setLesson,
        lessonSetter,
        getLesson,
        isLessonSet,
        type,
        getType,
        setType,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider };
