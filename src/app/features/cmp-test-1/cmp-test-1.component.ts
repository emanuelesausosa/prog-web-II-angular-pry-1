// 1. importar las dependecias de Component
import { Component } from '@angular/core';
// 2. Crear el decorator @Component
@Component({
  // -> 2.1 selector
  selector: 'cmp-test-1',
  // -> 2.2 htmlTemplate
  template: '<p>Hola mundo desde Comp-test-1</p>',
  // -> 2.3 css template (style)
  styles: ['p { color: red; }'],
})
// 3. clase Component
export class CmpTest1Component {}
