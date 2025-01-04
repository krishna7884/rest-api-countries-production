import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ThemeContextProvider from './contexts/ThemeContext';
export default function App() {
    return <ThemeContextProvider>
        <Header/>
        <Outlet/>
    </ThemeContextProvider>
}