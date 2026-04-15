import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom"

type props = {

    path: string,
    name: string | ReactNode,
    className?: string;

}

export default function NavigationButton( { path, name, className } : props ){
    
    const navigate = useNavigate();

    return(

        <a className={className} onClick={() => {navigate(path)}}>
            {name}
        </a>

    )

}