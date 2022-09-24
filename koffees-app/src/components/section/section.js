import "./section.css"

const Section = (props) => {
    return(
        <section class="section">
            <div class="beans2"></div>
            <header class="section_header">
                <h2 class="section_title">{props.Title || "Default title"}</h2>
            </header>
            <div class="section_wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Section;