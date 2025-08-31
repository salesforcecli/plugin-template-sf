/*
 * Copyright 2025, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { execCmd, TestSession } from '@salesforce/cli-plugins-testkit';
import { expect } from 'chai';
import { HelloWorldResult } from '../../../src/commands/hello/world.js';

let testSession: TestSession;

describe('hello world NUTs', () => {
  before('prepare session', async () => {
    testSession = await TestSession.create();
  });

  after(async () => {
    await testSession?.clean();
  });

  it('should say hello to the world', () => {
    const result = execCmd<HelloWorldResult>('hello world --json', { ensureExitCode: 0 }).jsonOutput?.result;
    expect(result?.name).to.equal('World');
  });

  it('should say hello to a given person', () => {
    const result = execCmd<HelloWorldResult>('hello world --name Astro --json', {
      ensureExitCode: 0,
    }).jsonOutput?.result;
    expect(result?.name).to.equal('Astro');
  });
});
