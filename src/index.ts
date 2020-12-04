export interface IMessage {
  user: string;
  body: string;
  event: string;
  timestamp: number;
  isFromSystem: boolean;
  isFromMe: boolean;
}

export interface IConnectionPayload {
  users: string[];
  messages: IMessage[];
}

export function buildMessage(
  user: string,
  body: string,
  isFromMe: boolean,
  isFromSystem: boolean
): IMessage {
  return {
    user,
    body,
    event: 'dummy',
    timestamp: new Date().getTime(),
    isFromMe,
    isFromSystem
  };
}
