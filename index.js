const fs = require('fs').promises;
const { get } = require('lodash');
const core = require('@actions/core');
const artifact = require('@actions/artifact');
const { createArtifacts } = require('@bundle-stats/cli-utils');
const { createJobs, createReport } = require('@bundle-stats/utils');

(async () => {
  const statsPath = core.getInput('webpack-stats-path', { required: true });

  try {
    core.debug(`Read webpack stats file from ${statsPath}`);
    const content = await fs.readFile(statsPath, 'utf8');
    const source = JSON.parse(content);
    const jobs = createJobs([{ webpack: source }]);

    core.debug('Generate report');
    const report = createReport(jobs);

    core.debug('Generate artifacts');
    const artifactsByType = createArtifacts(jobs, report, { html: true, json: true });
    const artifacts = Object.values(artifactsByType);

    core.debug('Save artifacts');
    await Promise.all(
      artifacts.map(({ filename, output }) => {
        return fs.writeFile(filename, output);
      })
    );

    const files = artifacts.map(({ filename }) => filename);
    await artifact.create().uploadArtifact('bundle-stats', files, __dirname);

    const info = get(report, 'insights.webpack.assetsSizeTotal.data.info.displayValue');
    if (info) {
      core.warning(`Total Bundle Size: ${info}`);
    }
  } catch (error) {
    return core.error(error.message);
  }
})();
