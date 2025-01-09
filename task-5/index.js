async function renderComponent(containerId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const componentData = await response.json();

        function createDOMElement(node) {
            const element = document.createElement(node.tag);

            if (node.attrs) {
                for (const attr in node.attrs) {
                    element.setAttribute(attr, node.attrs[attr]);
                }
            }

            if (node.children) {
                node.children.forEach(child => {
                    if (typeof child === 'string' || typeof child === 'number'){
                        element.appendChild(document.createTextNode(child));
                    } else {
                        element.appendChild(createDOMElement(child));
                    }
                });
            }

            return element;
        }

        const domElement = createDOMElement(componentData);
        const container = document.getElementById(containerId);
        container.appendChild(domElement);
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderComponent('app', 'component.json');
});