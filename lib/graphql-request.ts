/**
 * Lightweight fetch-based GraphQL utility for unauthenticated mutations.
 * Uses the existing NEXT_PUBLIC_GRAPHQL_URL environment variable.
 * Does NOT rely on Apollo Client to avoid server/client context issues in tool components.
 */

const GQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ||
  "https://app.pmspace.ai/backend/graphql";

export interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<GraphQLResponse<T>> {
  const response = await fetch(GQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(
      `Network error: ${response.status} ${response.statusText}`
    );
  }

  const json: GraphQLResponse<T> = await response.json();
  return json;
}
