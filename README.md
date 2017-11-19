# Atom Jest Snippets
[![apm](https://img.shields.io/apm/v/atom-jest-snippets.svg?style=flat-square)](https://atom.io/packages/atom-jest-snippets)
[![apm](https://img.shields.io/apm/dm/atom-jest-snippets.svg?style=flat-square)](https://atom.io/packages/atom-jest-snippets)

An [Atom](https://atom.io/) snippet library for [Jest](https://facebook.github.io/jest/). This library uses ES6 syntax.

Install via `apm install atom-jest-snippets`

## Settings
**Toggle Semicolons:**  [Default: with semicolons] Allows the user to toggle between having semicolons on or off.

## Snippet Available

expect.cson
---

#### [exp]
expect(value)
```js
expect($1)$2;
```

#### [expa]
expect.assertions(value)
```js
expect.assertions($1);
```

#### [exph]
expect.hasAssertions()
```js
expect.hasAssertions();
```

#### [ebe]
expect(value).toBe(value)
```js
expect($1).toBe($2);
```

#### [ecall]
expect(mockFn).toHaveBeenCalled()
```js
expect($1).toHaveBeenCalled();
```

#### [ecallt]
expect(mockFn).toHaveBeenCalledTimes(number)
```js
expect($1).toHaveBeenCalledTimes($2);
```

#### [ecallw]
expect(mockFn).toHaveBeenCalledWith(arg1, arg2, ...)
```js
expect($1).toHaveBeenCalledWith($2);
```

#### [ecloseto]
expect(number).toBeCloseTo(number, numDigits)
```js
expect($1).toBeCloseTo($2, $3);
```

#### [edef]
expect(value).toBeDefined()
```js
expect($1).toBeDefined();
```

#### [efalsy]
expect(value).toBeFalsy()
```js
expect($1).toBeFalsy();
```

#### [egreater]
expect(number).toBeGreaterThan(number)
```js
expect($1).toBeGreaterThan($2);
```

#### [egreateror]
expect(number).toBeGreaterThanOrEqual(number)
```js
expect($1).toBeGreaterThanOrEqual($2);
```

#### [eless]
expect(number).toBeLessThan(number)
```js
expect($1).toBeLessThan($2);
```

#### [elessor]
expect(number).toBeLessThanOrEqual(number)
```js
expect($1).toBeLessThanOrEqual($2);
```

#### [einst]
expect(obj).toBeInstanceOf(Class)
```js
expect($1).toBeInstanceOf($2);
```

#### [enull]
expect(value).toBeNull()
```js
expect($1).toBeNull();
```

#### [etruthy]
expect(value).toBeTruthy()
```js
expect($1).toBeTruthy();
```

#### [eundef]
expect(value).toBeUndefined()
```js
expect($1).toBeUndefined();
```

#### [econ]
expect(list).toContain(value)
```js
expect($1).toContain($2);
```

#### [econeq]
expect(list).toContainEqual(value)
```js
expect($1).toContainEqual($2);
```

#### [eeq]
expect(value).toEqual(value)
```js
expect($1).toEqual($2);
```

#### [eleng]
expect(list).toHaveLength(number)
```js
expect($1).toHaveLength($2);
```

#### [emat]
expect(string).toMatch(regexpOrString)
```js
expect($1).toMatch($2);
```

#### [ematob]
expect(obj).toMatchObject(obj)
```js
expect($1).toMatchObject($2);
```

#### [ematsnap]
expect(value).toMatchSnapshot(optionalString)
```js
expect($1).toMatchSnapshot($2);
```

#### [ethrow]
expect(func).toThrow(error)
```js
expect($1).toThrow($2);
```
globals.cson
---

#### [desc]
describe(name, fn)
```js
describe('$1', () => {
  $2
});
```

#### [test]
test(name, fn)
```js
test('$1', () => {
  $2
});
```

#### [it]
alias for test()
```js
it('$1', () => {
  $2
});
```

#### [aftera]
afterAll(fn)
```js
afterAll(() => {
  $1
})
```

#### [aftere]
afterEach(fn)
```js
afterEach(() => {
  $1
})
```

#### [beforea]
beforeAll(fn)
```js
beforeAll(() => {
  $1
})
```

#### [beforee]
beforeEach(fn)
```js
beforeEach(() => {
  $1
})
```
jest.cson
---

#### [jcleartimers]
```js
jest.clearAllTimers();
```

#### [jdisableautomock]
```js
jest.disableAutomock();
```

#### [jenableautomock]
```js
jest.enableAutomock();
```

#### [jfn]
```js
jest.fn($1);
```

#### [jismock]
```js
jest.isMockFunction($1);
```

#### [jgenmock]
```js
jest.genMockFromModule($1);
```

#### [jmock]
```js
jest.mock($1);
```

#### [jresetallmocks]
```js
jest.resetAllMocks();
```

#### [jresetmodules]
```js
jest.resetModules();
```

#### [jrunticks]
```js
jest.runAllTicks();
```

#### [jruntimers]
```js
jest.runAllTimers();
```

#### [jrunpendtimers]
```js
jest.runOnlyPendingTimers();
```

#### [jsetmock]
```js
jest.setMock($1);
```

#### [junmock]
```js
jest.unmock($1);
```

#### [jfaketimers]
```js
jest.useFakeTimers($1);
```

#### [jrealtimers]
```js
jest.useRealTimers($1);
```
mock.cson
---

#### [mclear]
```js
.mockClear();
```

#### [mreset]
```js
.mockReset();
```

#### [mimpl]
```js
.mockImplementation($1);
```

#### [mimplonce]
```js
.mockImplementationOnce($1);
```

#### [mrett]
```js
.mockReturnThis();
```

#### [mretval]
```js
.mockReturnValue($1);
```

#### [mretvalo]
```js
.mockReturnValueOnce($1);
```