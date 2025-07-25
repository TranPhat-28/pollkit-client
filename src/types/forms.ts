export interface ICreatePollFormInput {
  pollName: string;
  startTime: "now" | "start-at";
  startAt?: string;
  endTime: string;
  pollType: "public" | "private";
  password?: string;
  resultOpened: boolean;
  recorded: boolean;
}
