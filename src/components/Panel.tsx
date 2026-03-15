import { useDroppable } from "@dnd-kit/react";
import { JSX } from "react/jsx-dev-runtime";

function Panel({id, className, children}: {id: string, className?: string, children?: React.ReactNode}) {
    const {ref} = useDroppable({id});
    return(
        <div className={`panel ${className || ""}`} id={id} ref={ref}> 
            {children ? children : 
            <p>No Mods Installed</p>}
        </div>
    )
}

export default Panel;