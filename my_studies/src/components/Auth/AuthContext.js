import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';


const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [lesson, setLesson] = useState(null);
    const [type, typeSet] = useState(0);
    const [windowState, setWindowState] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    const [lessons_in, setLessons_In] = useState([]);
    const [lessons_out, setLessons_Out] = useState([]);
    const [lesson_editing, setLesson_Editing] = useState(null);
    const cookies = new Cookies();

    const userIsAuthenticated = () => {
        return cookies.get('user') !== undefined;
    };


    const userLogin = (user) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        cookies.set('user', JSON.stringify(user), {
            expires: new Date(Date.now() + 5000000),
            path: '/'
        })
        setUser(user);
    };


    const getUser = () => {
        return cookies.get('user')
    }


    const userLogout = () => {
        // Clear the user data from local storage
        sessionStorage.removeItem("user");
        cookies.remove('user', {path: '/'})
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

    const getWindow = () => {
        return cookies.get('window')
    }

    const setWindow = (window) => {
        sessionStorage.setItem("window", JSON.stringify(window));
        cookies.set('window', JSON.stringify(window), {
            expires: new Date(Date.now() + 1000000)
        })
        setWindowState(window);
    }

    const getDelId = () => {
        return cookies.get('del')
    }

    const setDelId = (del) => {
        sessionStorage.setItem("del", JSON.stringify(del));
        cookies.set('del', JSON.stringify(del), {
            expires: new Date(Date.now() + 1000000)
        })
        setDeleteId(del);
    }

    const getLessonsIn = () => {
        return cookies.get('less_in')
    }

    const setLessonsIn = (l) => {
        sessionStorage.setItem("less_in", JSON.stringify(l));
        cookies.set('less_in', JSON.stringify(l), {
            expires: new Date(Date.now() + 1000000)
        })
        setLessons_In(l);
    }

    const getLessonsOut = () => {
        return cookies.get('less_out')
    }

    const setLessonsOut = (l) => {
        sessionStorage.setItem("less_out", JSON.stringify(l));
        cookies.set('less_out', JSON.stringify(l), {
            expires: new Date(Date.now() + 1000000)
        })
        setLessons_Out(l);
    }

    const getLessonsEdit = () => {
        return cookies.get('less_edit', {path: '/'})
    }

    const setLessonsEdit = (l) => {
        sessionStorage.setItem("less_edit", JSON.stringify(l));
        cookies.set('less_edit', JSON.stringify(l), {
            expires: new Date(Date.now() + 1000000),
            path: '/'
        })
        setLesson_Editing(l);
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
        windowState,
        setWindow,
        getWindow,
        deleteId,
        setDelId,
        getDelId,
        lessons_in,
        setLessonsIn,
        getLessonsIn,
        lessons_out,
        getLessonsOut,
        setLessonsOut,
        lesson_editing,
        setLessonsEdit,
        getLessonsEdit,
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
