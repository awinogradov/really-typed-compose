# Really typed compose

Performs right-to-left function composition. Supports types definitions.

`((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → ((a, b, …, n) → z)`

## Usage

> npm i -S really-typed-compose

``` ts
import { compose } from 'really-typed-compose'

const add = (b: number) => (a: number) => a + b;
const multiply = (b: number) => (a: number) => a * b;

const calc = compose(multiply(2), add(2));

calc(0) // 4
calc(1) // 6
```

### Licence MIT
