import { DeleteQueueCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

const params = {
  QueueUrl: "https://sqs.ap-south-1.amazonaws.com/509399618867/new-queue",
};

export const run = async () => {
  try {
    const data = await sqsClient.send(new DeleteQueueCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
