# Miro testing task

It is an example of jest-playwright framework using DDT approaches that incorporates snapshot testing. Testing data is partially randomly generated with facker lib. Reporter has features to take screanshots on failures, test results are stored in form of JSON object.

## Set up

The framework was set up on Mac. Tests require nodejs.
After repo is cloned execute next commands:

```npm install```

## Start testing

```npm test```

## Update snapshots

Due to localization snapshots could cause errors in your region.
To update snapshots use command:

```npm test -- --updateSnapshot```

## Reporting

Reports stored into test-report folder which contains report JSON and screenshot folder in case of test failures.