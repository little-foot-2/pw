import { UserShortInfo } from './user-short-info';


export interface MakeTransferData {
  recipient: UserShortInfo;
  amount: number;
}

export function createDefaultMakeTransferData(): MakeTransferData {
  return {} as any;
}
