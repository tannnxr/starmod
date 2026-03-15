import { useDraggable } from "@dnd-kit/react";
function ModCard({modName, id}: {modName: string, id: string}) {
    const {ref} = useDraggable({id});
    return(
        <div className="mod-card" id={id} ref={ref}>
            <h3>{modName}</h3>
        </div>
    )
}

export default ModCard;