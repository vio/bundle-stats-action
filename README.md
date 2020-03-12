# [BundleStats](https://github.com/relative-ci/bundle-stats) Github Action

This action generates [bundle-stats](https://github.com/relative-ci/bundle-stats) reports for webpack build stats.

## Inputs

### `webpack-stats-path`

**Required** Relative path to an existing webpack stats file, default `dist/webpack-stats.json`.

[bundle-stats webpack configuration options](https://github.com/relative-ci/bundle-stats/tree/master/packages/cli#webpack-configuration)

## Outputs

`bundle-stats` artifact with `html` and `json` reports:

<img src="https://raw.githubusercontent.com/vio/bundle-stats-action/master/assets/action.jpg?token=AAADH5EKGBHTKLLAHXZN3GC6NGDI2" alt="BundleStats report" width="640" />

## Example usage

```yml
jobs:
  build:
    steps:
    - name: Run bundle-stats
      uses: vio/bundle-stats-action@v1
      with:
        webpack-stats-path: 'static/stats.json'
```
