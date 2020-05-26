import {
  Type,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  EmbeddedViewRef,
} from '@angular/core';


export class HtmlContainer {
  private attached = false;
  private disposeFn: () => void;

  constructor(
    private hostElement: Element,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) {}

  attach<TComponent>(componentType: Type<TComponent>): ComponentRef<TComponent> {
    if (this.attached) {
      throw new Error('Component has already been attached.');
    }

    this.attached = true;
    const childComponentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const childComponentRef = childComponentFactory.create(this.injector);

    this.applicationRef.attachView(childComponentRef.hostView);
    this.disposeFn = () => {
      this.applicationRef.detachView(childComponentRef.hostView);
      childComponentRef.destroy();
    };

    const childRootNode = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
    this.hostElement.appendChild(childRootNode);

    return childComponentRef;
  }

  dispose() {
    if (this.attached) {
      this.disposeFn();
    }
  }
}
