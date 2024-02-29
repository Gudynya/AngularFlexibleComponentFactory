import {ComponentRef, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {IDynamicComponentInterface} from "./dynamic-component.interface";

/**
 * The Type map dictionary
 */
export const TYPE_MAP: any = {};

@Injectable({
  providedIn: 'root'
})
export class FlexibleComponentFactoryService {

  constructor() { }

  /***
   * Create the component declared with @DynamicComponent decorator using the identifier
   * @param componentId The componentId declared into DynamicComponentDecorator
   * @param currentContainer The container
   * @param params The initial component parameters
   */
  createDynamicComponent<T>(componentId: string, currentContainer: ViewContainerRef, params: {}): ComponentRef<IDynamicComponentInterface> {
    if (!TYPE_MAP[componentId]) {
      throw new Error(`No class exists with the decorator @DynamicComponent decorator ('${componentId}')`);
    }

    const componentReference: ComponentRef<IDynamicComponentInterface> = currentContainer.createComponent(TYPE_MAP[componentId]);
    componentReference.instance.initializeDynamicComponent(params);
    return componentReference;
  }


  /***
   * Create the component declared with @DynamicComponent decorator using the identifier
   * @param componentId The componentId declared into DynamicComponentDecorator
   * @param currentContainer The container
   * @param index The index at which to insert the new component's host view into this container. If not specified, appends the new view as the last entry.
   * @param injector The injector to use as the parent for the new component.
   * @param params The initial component parameters
   * @deprecated Use createDynamicComponent
   */
  createComponent<T>(
    componentId: string, currentContainer: ViewContainerRef, injector?: Injector, params?: {}, index?: number): ComponentRef<IDynamicComponentInterface> {
    if (!TYPE_MAP[componentId]) {
      throw new Error(`No class exists with the decorator @DynamicComponent decorator ('${componentId}')`);
    }

    const componentReference: ComponentRef<IDynamicComponentInterface> = currentContainer.createComponent(TYPE_MAP[componentId], index, injector);
    componentReference.instance.initializeDynamicComponent(params);
    return componentReference;
  }
}
