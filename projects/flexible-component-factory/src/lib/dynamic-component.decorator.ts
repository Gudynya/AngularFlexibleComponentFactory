import {TYPE_MAP} from "./flexible-component-factory.service";
import {IDynamicComponentInterface} from "./dynamic-component.interface";

/**
 * Decorator for dynamic components.
 * On warm up all the components whose declare this component will be introduced into TYPE_MAP dictionary.
 * @param name
 * @constructor
 */
export function DynamicComponent(name: string): any {
  return function _DynamicComponent<T extends new(...args: any[]) => IDynamicComponentInterface>(constr: T): void {
    if (!TYPE_MAP[name]) {
      throw new Error('Component with name "' + name + '" already exists.');
    }
    TYPE_MAP[name] = constr;
  };
}
