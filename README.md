# [BundleStats](https://github.com/relative-ci/bundle-stats) Github Action

This action generates a [bundle-stats](https://github.com/relative-ci/bundle-stats) report and saves it as an artifact.

## Inputs

### `webpack-stats-path`

**Required** The relative path to an existing webpack stats file, default `dist/webpack-stats.json`.

[bundle-stats webpack configuration options](https://github.com/relative-ci/bundle-stats/tree/master/packages/cli#webpack-configuration)

## Outputs

`bundle-stats` artifact with `html` and `json` reports:

<img src="https://raw.githubusercontent.com/vio/bundle-stats-action/master/assets/action.jpg?token=AAADH5EKGBHTKLLAHXZN3GC6NGDI2" alt="BundleStats report" width="640" />

## Example usage

```yml
uses: vio/bundle-stats-action@v1
with:
  webpack-stats-path: 'static/stats.json'
```
