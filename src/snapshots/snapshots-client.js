class SnapshotsClient {

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  createSnapshot(teamId, slackUsername, objectType, objectId, fromTS, toTS, query, webhookUrl) {
    const request = {
      snapshotType: objectType.toUpperCase(),
      snapshotSavedObjectId: objectId,
      message: `Snapshot with query: \`${query}\``,
      timeFrameFrom: fromTS,
      timeFrameTo: toTS,
      snapshotTimeZone: 'UTC',
      queryString: query,
      darkTheme: true,
      slackWebhookUrls: [webhookUrl]
    };

    return this.httpClient.post(teamId, '/v1/snapshotter', request);
  }

}

module.exports = SnapshotsClient;
