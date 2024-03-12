module.exports = {
	git: {
		requireCleanWorkingDir: false,
		commitMessage: "ci: release v${version}",
		tag: true,
		commit: true,
		push: false,

		changelog:
			"npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs",
	},
	github: {
		release: true,
		releaseNotes:
			'git log --no-merges --pretty=format:"* %s %h" ${latestTag}...master',
		comments: {
			submit: true,
			issue:
				":rocket: _This issue has been resolved in v${version}. See [${releaseName}](${releaseUrl}) for release notes._",
			pr: ":rocket: _This pull request is included in v${version}. See [${releaseName}](${releaseUrl}) for release notes._",
		},
	},
	plugins: {
		"@release-it/conventional-changelog": {
			preset: {
				name: "conventionalcommits",
			},
			infile: "CHANGELOG.md",
		},
	},
	hooks: {
		"before:init": [
			"git fetch --tags -f",
			"git fetch --prune --prune-tags origin",
			"pnpm test",
			"git update-index -q --refresh",
		],
		"before:beforeBump": [
			"git flow release start v${version}",
			"pnpm pretty-quick",
			'git commit  --allow-empty -am "chore: prettify before release"',
			"echo \uD83D\uDC4A before:bump version=v${version} latestVersion=v${latestVersion}",
		],
		"after:release": [
			"git flow release finish --notag",
			"git push origin --tags",
			"echo \uD83D\uDE4C Successfully released ${name} v${version} to ${repo.repository}.",
			"git push origin HEAD",
			"git push origin refs/heads/master:master",
			"echo Successfully released ${name} v${version} to ${repo.repository}.",
		],
		"after:git:release": "gh pr create --fill -B master",
	},
};
