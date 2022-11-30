class ProjectInput{
  hostElement: HTMLDivElement;// main root div to output everything
  templateElement: HTMLTemplateElement; // template that contains form
  element: HTMLFormElement;// template form

  constructor(){
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true); // template node
    this.element = importedNode.firstElementChild as HTMLFormElement; // form
    this.attach();
  }

  private attach(){
    this.hostElement.insertAdjacentElement('afterbegin', this.element); // add form to main root div
  }
}

const prjInput = new ProjectInput();