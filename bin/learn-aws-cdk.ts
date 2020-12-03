#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LearnAwsCdkStack } from '../lib/learn-aws-cdk-stack';

const app = new cdk.App();
new LearnAwsCdkStack(app, 'LearnAwsCdkStack');
