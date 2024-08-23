import { useLocation } from "react-router-dom"
import { useView } from "../../hooks/useView"

export default function AuthenticationForm({ children }) {
    useView()
    const {pathname} = useLocation()
    
    return (
        <div className="bg-white p-3 shadow-xl mx-auto w-3/4 my-10 mb-20 pb-14 md:my-0 md:w-fit px-11">
            {children}
        </div>
    )
}
