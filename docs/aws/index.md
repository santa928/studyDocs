# AWS（入口）

## この章でできるようになること

- AWS が何を提供するサービスかを説明できる
- 主要サービスの位置づけを会話で整理できる
- Dockerと同様に「入口→詳細」の順で学べる

## まず読む（おすすめ順）

1. [AWSとは](what-is-aws.md)
2. [リージョンとAZ（場所の考え方）](regions-and-az.md)
3. [IAM（権限の考え方）](iam-basics.md)
4. [よくあるプロダクトを成立させるAWSサービス一覧](product-services.md)
5. [ネットワークの基本（VPC / Subnet / SG）](networking-basics.md)
6. [コンピュートの基本（EC2 / ECS / Lambda）](compute-basics.md)
7. [データの基本（S3 / RDS / DynamoDB）](data-basics.md)
8. [最小構成の例（Webアプリ）](architecture-sample.md)
9. [AWS チートシート（会話用）](cheatsheet.md)

## 最短まとめ（3行）

- AWSは「インターネット上のIT道具箱」
- 場所はリージョン／AZ、権限はIAMで管理する
- 主要サービスは「ネットワーク・計算・データ」に分かれる

## いまはこの理解で十分（超短縮版）

- AWS: 使った分だけ借りるクラウド（詳しくは[AWSとは](what-is-aws.md)）
- 場所: リージョンとAZ（詳しくは[リージョンとAZ](regions-and-az.md)）
- 権限: IAMで管理（詳しくは[IAM](iam-basics.md)）

## サービス別に深掘りしたい人向け

- 入口: [Route 53](route53.md) / [ALB](alb.md)
- ネットワーク: [VPC](vpc.md) / [Subnet](subnet.md) / [Security Group](security-group.md)
- コンピュート: [EC2](ec2.md) / [ECS](ecs.md) / [Lambda](lambda.md)
- データ: [S3](s3.md) / [RDS](rds.md) / [DynamoDB](dynamodb.md)
- 比較: [RDSとDynamoDBの違い（NoSQLって何？）](rds-vs-dynamodb.md)
