# FlexibleComponentFactory

A flexible component factory resolver for angular with a custom map loaded at init and lazy load components. 
It can be used to prevent circular dependencies.

# Install
```
npm install flexible-component-factory --save-dev
```
# Usage

Declare a component

```typescript
@DynamicComponent('component')
@Component({
  selector: 'app-custom-dynamic-component',
  templateUrl: './custom-dynamic.component.html'
})
export class CustomDynamicComponent implements IDynamicComponentInterface {
...
  initializeDynamicComponent(params: any): void {
  }
...
}
```

Invoke the component:

```
const component : ComponentRef<ICustomComponentInterface> = this.customComponentFactory.createDynamicComponent('component', container, {});
```
