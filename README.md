# Atom Jest Snippets
[![apm](https://img.shields.io/apm/v/atom-jest-snippets.svg?style=flat-square)](https://atom.io/packages/atom-jest-snippets)
[![apm](https://img.shields.io/apm/dm/atom-jest-snippets.svg?style=flat-square)](https://atom.io/packages/atom-jest-snippets)

An [Atom](https://atom.io/) snippet library for [Jest](https://facebook.github.io/jest/). This library uses ES6 syntax.

Install via `apm install atom-jest-snippets`

## Settings
**Toggle Semicolons:**  [Default: with semicolons] Allows the user to toggle between having semicolons on or off.

## Snippets Available

The **⇥** means the `TAB` key

| Trigger | Content |
| ------- | ------- |
| `jcleartimers→`|`jest.clearAllTimers()` |
| `jclearmocks→`|`jest.clearAllMocks()` |
| `jdisableautomock→`|`jest.disableAutomock()` |
| `jdomo→`|`jest.doMock($1)` |
| `jdonmo→`|`jest.dontMock($1)` |
| `jenableautomock→`|`jest.enableAutomock()` |
| `jfn→`|`jest.fn($1)` |
| `jgenmock→`|`jest.genMockFromModule($1)` |
| `jismock→`|`jest.isMockFunction($1)` |
| `jmock→`|`jest.mock($1)` |
| `jresetallmocks→`|`jest.resetAllMocks()` |
| `jresetmodules→`|`jest.resetModules()` |
| `jrestore→`|`jest.restoreAllMocks()` |
| `jrunticks→`|`jest.runAllTicks()` |
| `jruntimers→`|`jest.runAllTimers()` |
| `jrunpendtimers→`|`jest.runOnlyPendingTimers()` |
| `jsetmock→`|`jest.setMock($1)` |
| `jspy→`|`jest.spyOn($1)` |
| `junmock→`|`jest.unmock($1)` |
| `jfaketimers→`|`jest.useFakeTimers($1)` |
| `jrealtimers→`|`jest.useRealTimers($1)` |
| ------- | ------- |
| `enot→`|`expect($1).not` |
| `eres→`|`expect($1).resolves` |
| `erej→`|`expect($1).rejects` |
| `ebe→`|`expect($1).toBe($2)` |
| `ecloseto→`|`expect($1).toBeCloseTo($2, $3)` |
| `edef→`|`expect($1).toBeDefined()` |
| `efalsy→`|`expect($1).toBeFalsy()` |
| `egreater→`|`expect($1).toBeGreaterThan($2)` |
| `egreateror→`|`expect($1).toBeGreaterThanOrEqual($2)` |
| `einst→`|`expect($1).toBeInstanceOf($2)` |
| `eless→`|`expect($1).toBeLessThan($2)` |
| `elessor→`|`expect($1).toBeLessThanOrEqual($2)` |
| `enull→`|`expect($1).toBeNull()` |
| `etruthy→`|`expect($1).toBeTruthy()` |
| `eundef→`|`expect($1).toBeUndefined()` |
| `econ→`|`expect($1).toContain($2)` |
| `econeq→`|`expect($1).toContainEqual($2)` |
| `eeq→`|`expect($1).toEqual($2)` |
| `ecall→`|`expect($1).toHaveBeenCalled()` |
| `ecallt→`|`expect($1).toHaveBeenCalledTimes($2)` |
| `ecallw→`|`expect($1).toHaveBeenCalledWith($2)` |
| `eleng→`|`expect($1).toHaveLength($2)` |
| `eprop→`|`expect($1).toHaveProperty($2)` |
| `emat→`|`expect($1).toMatch($2)` |
| `ematob→`|`expect($1).toMatchObject($2)` |
| `ematsnap→`|`expect($1).toMatchSnapshot($2)` |
| `ethr→`|`expect($1).toThrow($2)` |
| `ethrsn→`|`expect($1).toThrow($2)` |
| `exp→`|`expect($1)$2` |
| `eanyt→`|`expect.anything($1)` |
| `eany→`|`expect.any($1)` |
| `earrc→`|`expect.arrayContaining($1)` |
| `expa→`|`expect.assertions($1)` |
| `exph→`|`expect.hasAssertions()` |
| `eobjc→`|`expect.objectContaining($1)` |
| `estrc→`|`expect.stringContaining($1)` |
| `estrm→`|`expect.stringMatching($1)` |
| ------- | ------- |
| `aftera→`|`afterAll(() => {$1})` |
| `aftere→`|`afterEach(() => {$1})` |
| `beforea→`|`beforeAll(() => {$1})` |
| `beforee→`|`beforeEach(() => {$1})` |
| `desc→`|`describe('$1', () => {$2})` |
| `it→`|`it('$1', () => {$2})` |
| `test→`|`test('$1', () => {$2})` |
| ------- | ------- |
| `mclear→`|`.mockClear()` |
| `mimpl→`|`.mockImplementation($1)` |
| `mimplonce→`|`.mockImplementationOnce($1)` |
| `mreset→`|`.mockReset()` |
| `mrett→`|`.mockReturnThis()` |
| `mretval→`|`.mockReturnValue($1)` |
| `mretvalo→`|`.mockReturnValueOnce($1)` |
| ------- | ------- |


#### Custom
`jsetup→`

```js
import $1 from './$1'

describe('$1', () => {
  test('$2', () => {
      $3
  })
})
```

## Development

```sh
$ cd ~/.atom/packages
$ git clone https://github.com/webbushka/atom-react-snippets.git
$ cd atom-react-snippets
$ apm install
$ apm link
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`