function ModManagementBar() {
    return(
        <div className="mod-management-bar">
            <div className="add-remove">
                <button type="button">+</button>
                <button type="button">-</button>
            </div>
            <button type="button">Create Collection</button>
            <button type="button">Load Collection</button>
            <button type="button">Start Game</button>
        </div>
    )
}

export default ModManagementBar;