# [BundleStats](https://github.com/relative-ci/bundle-stats) Github Action

This action generates a [bundle-stats](https://github.com/relative-ci/bundle-stats) report and saves it as an artifact.

## Inputs

### `webpack-stats-path`

**Required** The relative path to an existing webpack stats file, default `dist/webpack-stats.json`.

[bundle-stats webpack configuration options](https://github.com/relative-ci/bundle-stats/tree/master/packages/cli#webpack-configuration)

## Outputs

`bundle-stats` artifacts:

![bundle-stats artifacts](./assets/action.jpg =640x)

## Example usage

```yml
uses: vio/bundle-stats-action@v1
with:
  webpack-stats-path: 'static/stats.json'
```
