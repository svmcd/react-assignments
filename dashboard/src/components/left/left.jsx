import "./left.css"

const Left = ({navListItems, buttonText}) => {

    let toBeRenderedNavListItems = navListItems.map(object => {

        let noti = null

        if(object.noti > 0){
            noti = <div className="dashboard__noti">{object.noti}</div>
        }

        return(
            <li key={object.name} className="dashboard__li">
                <a href="#" className="dashboard__link">
                    {object.name} 
                    {noti}
                </a>
            </li>
        )
    });

    return (
        <section className="dashboard__wrapper">
            <nav className="dashboard__nav">
                <ul className="dashboard__ul">
                    {toBeRenderedNavListItems}
                </ul>
            </nav>
            <button className="dashboard__button">{buttonText || "Click here"}</button>
        </section>
    )
}

export default Left;