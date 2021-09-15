**NOTE: This template for sf plugins is not yet offical. Please consult with the Platform CLI team before using this template.**

# plugin-&lt;REPLACE ME&gt;

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-template-sf.svg?label=@salesforce/plugin-template-sf)](https://www.npmjs.com/package/@salesforce/plugin-template-sf) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-template-sf/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-template-sf/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-template-sf.svg)](https://npmjs.org/package/@salesforce/plugin-template-sf) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-template-sf/main/LICENSE.txt)

Change above to <REPLACE_ME> before finalizing

&lt;REPLACE ME DESCRIPTION START&gt;

This repository provides a template for creating a plugin for the Salesforce CLI. To convert this template to a working plugin:

1. Replace filler values
   a) Every instance of `<REPLACE_ME>` can be directly substitued for the name of the new plugin. However beware, things like github paths are for the salesforcecli Github organization
   b) Search for case-matching `REPLACE` to find other filler values, such as for the plugin description

&lt;REPLACE ME DESCRIPTION END&gt;

## Learn about the plugin-template-sf

Salesforce CLI plugins are based on the [oclif plugin framework](<(https://oclif.io/docs/introduction.html)>). Read the [plugin developer guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_plugins.meta/sfdx_cli_plugins/cli_plugins_architecture_sf_cli.htm) to learn about Salesforce CLI plugin development.

This repository contains a lot of additional scripts and tools to help with general Salesforce node development and enforce coding standards. You should familiarize yourself with some of the [node developer packages](https://github.com/forcedotcom/sfdx-dev-packages/) used by Salesforce. There is also a default circleci config using the [release management orb](https://github.com/forcedotcom/npm-release-management-orb) standards.

Additionally, there are some additional tests that the Salesforce CLI will enforce if this plugin is ever bundled with the CLI. These test are included by default under the `posttest` script and it is recommended to keep these tests active in your plugin, regardless if you plan to have it bundled.

# Everything past here is only a suggestion as to what should be in your specific plugin's description

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sf plugins:install <REPLACE_ME>@x.y.z
```

## Issues

Please report any issues at https://github.com/salesforcecli/cli/issues

## Contributing

1. Please read our [Code of Conduct](CODE_OF_CONDUCT.md)
2. Create a new issue before starting your project so that we can keep track of
   what you are trying to add/fix. That way, we can also offer suggestions or
   let you know if there is already an effort in progress.
3. Fork this repository.
4. [Build the plugin locally](#build)
5. Create a _topic_ branch in your fork. Note, this step is recommended but technically not required if contributing using a fork.
6. Edit the code in your fork.
7. Write appropriate tests for your changes. Try to achieve at least 95% code coverage on any new code. No pull request will be accepted without unit tests.
8. Sign CLA (see [CLA](#cla) below).
9. Send us a pull request when you are done. We'll review your code, suggest any needed changes, and merge it in.

### CLA

External contributors will be required to sign a Contributor's License
Agreement. You can do so by going to https://cla.salesforce.com/sign-cla.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/plugin-<REPLACE_ME>

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/dev` or `./bin/dev.cmd` file.

```bash
# Run using local run file.
./bin/dev <REPLACE_ME>
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sf cli
sf plugins:link .
# To verify
sf plugins
```

## Commands

<!-- commands -->

- [`sf hello world`](#sf-hello-world)

## `sf hello world`

Say hello either to the world or someone you know.

```
USAGE
  $ sf hello world [--json] [-n <value>]

FLAGS
  -n, --name=<value>  [default: World] The name of the person you'd like to say hello to.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Say hello either to the world or someone you know.

  Say hello either to the world or someone you know.

EXAMPLES
  Say hello to the world:

    $ sf hello world

  Say hello to someone you know:

    $ sf hello world --name Astro
```

<!-- commandsstop -->
