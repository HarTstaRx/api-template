export interface GetItemModelResponse {
  id: string;
  name: string;
  done: boolean;
}

export interface CreateItemRequest {
  name: string;
  done: boolean;
}

export type UpdateItemRequest = GetItemModelResponse
