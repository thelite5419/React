function createElement(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)


    /// optimized technique
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}



const reactElement ={
    type: 'a', 
    props: {
        href: "https://google.com",
        target : "_blank"
    }, 
    children: "click me daddy"
}

const mainElement = document.querySelector("#root")

createElement(reactElement, mainElement)