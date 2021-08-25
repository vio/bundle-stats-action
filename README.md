# [BundleStats](https://github.com/relative-ci/bundle-stats) Github Action

This action generates [bundle-stats](https://github.com/relative-ci/bundle-stats) reports for webpack stats and sets the total bundle size as status description for the commit.

## Inputs

### `webpack-stats-path`

**Required** Relative path to an existing webpack stats file, default `dist/webpack-stats.json`.

[bundle-stats webpack configuration options](https://github.com/relative-ci/bundle-stats/tree/master/packages/cli#webpack-configuration)

### `repo-token`

Github action repo token (eg: `${{ secrets.GITHUB_TOKEN }}`). If provided, the bundle size info will be added as a commit status.

## `id`

Action run id. When running the action multiple times the id will be used to scope the artifacts and
commit status


## Outputs

`bundle-stats` artifact with `html` and `json` reports:

<img src="https://raw.githubusercontent.com/vio/bundle-stats-action/master/assets/action.jpg?token=AAADH5EKGBHTKLLAHXZN3GC6NGDI2" alt="BundleStats report" width="640" />

## Example usage

```yml
jobs:
  build:
    steps:
    - name: Run bundle-stats
      uses: vio/bundle-stats-action@v1.3.0
      with:
        webpack-stats-path: 'static/webpack-stats.json'
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

### With multiple runs

```yml
jobs:
  build:
    steps:
    - name: Run bundle-stats for app bundle
      uses: vio/bundle-stats-action@v1.3.0
      with:
        id: app
        webpack-stats-path: 'app/webpack-stats.json'
        repo-token: ${{ secrets.GITHUB_TOKEN }}
    - name: Run bundle-stats for web bundle
      uses: vio/bundle-stats-action@v1.3.0
      with:
        id: web
        webpack-stats-path: 'web/webpack-stats.json'
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

## Related projects

### [relative-ci.com](https://relative-ci.com)

Continuous monitoring for webpack bundles:
- Monitor and analyze bundle size, assets, modules, packages
- Github Checks, Slack integration
- Support for all major CI services (Travis CI, Circle CI, Jenkins, Gitlab CI, Codeship, etc)
- Free for OpenSource

[Try Beta](https://relative-ci.com)

### [bundle-stats](https://github.com/relative-ci/bundle-stats)

In-depth bundle analyzer for webpack(bundle size, assets, modules, packages).

### [relative-ci/compare](https://compare.relative-ci.com)

Standalone web application to compare Webpack/Lighthouse/Browsertime stats.

[Compare bundle stats](https://compare.relative-ci.com)
