/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { SfCommand } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
// TODO: replace the package name with your new package's name
const messages = Messages.loadMessages('@salesforce/plugin-template-sf', 'hello.world');

export type HelloWorldResult = {
  name: string;
  time: string;
};

export default class World extends SfCommand<HelloWorldResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static flags = {
    name: Flags.string({
      char: 'n',
      description: messages.getMessage('flags.name.description'),
      default: 'World',
    }),
  };

  public async run(): Promise<HelloWorldResult> {
    const { flags } = await this.parse(World);
    const time = new Date().toDateString();
    const message = `Hello ${flags.name} at ${time}`;
    this.log(message);
    return {
      name: flags.name,
      time,
    };
  }
}
