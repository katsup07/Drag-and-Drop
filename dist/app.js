"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true); // template node
        this.element = importedNode.firstElementChild; // form
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element); // add form to main root div
    }
}
const prjInput = new ProjectInput();
