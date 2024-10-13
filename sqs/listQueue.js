import { ListQueuesCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

/**
 * Lists all the queues in the specified AWS region.
 *
 * This function will return a list of URL's for all the queues present in the
 * specified region. The list will only contain the URL's of the queues and
 * additional information will not be provided.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing
 * the list of queue URL's.
 */
const run = async () => {
  try {
    const data = await sqsClient.send(new ListQueuesCommand({}));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};

run();
