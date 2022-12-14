import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export const getAccessToken = async () => {
  try {
    const graphGLClient = new GraphQLClient(
      "https://zero9-backend.brian-hong.tech/graphql",
      { credentials: "include" }
    );

    const result = await graphGLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error)
      console.log(`restoreAccessToken Error : ${error}`);
  }
};
