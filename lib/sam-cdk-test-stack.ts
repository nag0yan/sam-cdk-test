import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SamCdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_lambda.Function(this, 'MyFunction', {
      runtime: cdk.aws_lambda.Runtime.PYTHON_3_12,
      handler: 'main.handler',
      code: cdk.aws_lambda.Code.fromAsset('./function')
    })
  }
}
