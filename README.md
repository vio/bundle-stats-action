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
      uses: vio/bundle-stats-action@v1
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
      uses: vio/bundle-stats-action@v1
      with:
        id: app
        webpack-stats-path: 'app/webpack-stats.json'
        repo-token: ${{ secrets.GITHUB_TOKEN }}
    - name: Run bundle-stats for web bundle
      uses: vio/bundle-stats-action@v1
      with:
        id: web
        webpack-stats-path: 'web/webpack-stats.json'
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

## Related projects

### :cyclone: [relative-ci.com](https://relative-ci.com?utm_medium=bundle-stats-action)

#### In-depth webpack bundle analysis and monitoring

RelativeCI automates webpack bundle analysis, monitoring, and alerting so you can identify and fix bundle regressions before shipping to production:

- :crystal_ball: Analyze webpack bundle stats on every build
- :chart_with_upwards_trend: Monitor webpack bundle stats changes and identify tendencies over extended periods
- :bell: Get notified via GitHub Checks, GitHub Pull Request comments, and Slack notifications
- :hammer: Support for all major CI services (CircleCI, GitHub Actions, Gitlab CI, Jenkins, Travis CI)
- :two_hearts: Always free for Open Source

[Try for free](https://relative-ci.com?utm_medium=bundle-stats-action)

### [bundle-stats](https://github.com/relative-ci/bundle-stats)

Analyze webpack stats(bundle size, assets, modules, packages) and compare the results between different builds.

### [relative-ci/compare](https://compare.relative-ci.com)

Standalone web application to compare Webpack/Lighthouse/Browsertime stats.

[Compare bundle stats](https://compare.relative-ci.com)
