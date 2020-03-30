module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				loose: true,
				modules: false,
				useBuiltIns: "usage",
				corejs: 3
			}
		],
		"@babel/preset-react"
	],
	plugins: []
};
