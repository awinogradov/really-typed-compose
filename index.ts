export type Arity1<A, B> = (a: A) => B;

export function compose<A1, A2>(f: Arity1<A1, A2>): Arity1<A1, A2>;
export function compose<A1, A2, A3>(g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A3>;
export function compose<A1, A2, A3, A4>(h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A4>;
export function compose<A1, A2, A3, A4, A5>(i: Arity1<A4, A5>, h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A5>;
export function compose<A1, A2, A3, A4, A5, A6>(j: Arity1<A5, A6>, i: Arity1<A4, A5>, h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A6>;
export function compose<A1, A2, A3, A4, A5, A6, A7>(p: Arity1<A6, A7>, j: Arity1<A5, A6>, i: Arity1<A4, A5>, h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A7>;
export function compose<A1, A2, A3, A4, A5, A6, A7, A8>(c: Arity1<A7, A8>, p: Arity1<A6, A7>, j: Arity1<A5, A6>, i: Arity1<A4, A5>, h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A8>;
export function compose<A1, A2, A3, A4, A5, A6, A7, A8, A9>(u: Arity1<A8, A9>, c: Arity1<A7, A8>, p: Arity1<A6, A7>, j: Arity1<A5, A6>, i: Arity1<A4, A5>, h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A9>;
export function compose<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(y: Arity1<A9, A10>, u: Arity1<A8, A9>, c: Arity1<A7, A8>, p: Arity1<A6, A7>, j: Arity1<A5, A6>, i: Arity1<A4, A5>, h: Arity1<A3, A4>, g: Arity1<A2, A3>, f: Arity1<A1, A2>): Arity1<A1, A10>;

/** So, if you need more than 10 arguments for composition, you are strange ;-) */

/**
 * Composes single-argument functions from right to left.
 * 
 * compose(f, g, h) => (...args) => f(g(h(...args)))
 *
 * @param funcs functions to compose
 */

export function compose(...funcs: any[]) {
    if (funcs.length === 0) {
        return (arg: any) => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args: any[]) => a(b(...args)));
}
