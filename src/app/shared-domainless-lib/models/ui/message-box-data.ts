import { MessageBoxButtons } from './message-box-buttons.enum';


export interface MessageBoxData {
  title: string;
  message: string;
  buttons: MessageBoxButtons;
}
