/**
 * Dynamic component interface
 */
export interface IDynamicComponentInterface {

  /**
   * Initialize the dynamic component delcared with @DynamicComponent decorator
   * @param params
   */
  initializeDynamicComponent(params: any): void
}
