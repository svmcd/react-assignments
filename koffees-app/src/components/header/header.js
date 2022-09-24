import "./header.css"

const Header = (props) => {
    return(
        <header class="header">
            <div class="beans"></div>
            <h1 class="header_title">{props.Title || "Default title"}</h1>
            <h2 class="header_subtitle">{props.subTitle || "Default subtitle" }</h2>
            <button class="header_button">{props.buttonText || "Default"}</button>
        </header>
    );
}

export default Header