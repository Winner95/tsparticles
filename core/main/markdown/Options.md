# **_Options_**

| property         | option type        | example                                | notes                                                                                                                                                                                                  |
| ---------------- | ------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `background`     | `object`           |                                        | See Background options {@link IBackground | here}                                                                                                                                                      |
| `backgroundMask` | `object`           |                                        | See Background Mask options {@link IBackgroundMask | here}                                                                                                                                             |
| `detectRetina`   | `boolean`          | `true` / `false`                       | replaces the old `retina_detect` property                                                                                                                                                              |
| `fpsLimit`       | `number`           | `30`                                   | _defaults to `30`_, replaces the old `fps_limit` property                                                                                                                                              |
| `infection`      | `object`           |                                        | See Infection options {@link IInfection | here}                                                                                                                                                        |
| `interactivity`  | `object`           |                                        | See Interactivity options {@link IInteractivity | here}                                                                                                                                                |
| `particles`      | `object`           |                                        | See Particles options {@link IParticles | here}                                                                                                                                                        |
| `pauseOnBlur`    | `boolean`          | `true` / `false`                       | pauses the animations when the page isn't on foreground                                                                                                                                                |
| `preset`         | `string` / `array` | `"basic"`<br /> `[ "basic", "60fps" ]` | You can use this property to load one or more presets for focusing on important properties and not all config. You can find presets on `npm` [here](https://www.npmjs.com/search?q=tsparticles-preset) |

## Plugins

These options are not used by slim bundle

| property      | option type        | example | notes                                              |
| ------------- | ------------------ | ------- | -------------------------------------------------- |
| `absorbers`   | `object` / `array` |         | See Absorbers options {@link IAbsorber | here}     |
| `emitters`    | `object` / `array` |         | See Emitter options {@link IEmitter | here}        |
| `polygonMask` | `object`           |         | See Particles options {@link IPolygonMask | here}  |
