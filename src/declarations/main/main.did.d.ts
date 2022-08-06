import type { Principal } from '@dfinity/principal';
export type Email = string;
export interface EmailPage {
  'content' : Array<Email>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface SubscribeResult { 'status' : boolean, 'code' : string }
export interface _SERVICE {
  'getEmailList' : (arg_0: bigint, arg_1: bigint) => Promise<EmailPage>,
  'getEmailSize' : () => Promise<bigint>,
  'subscribe' : (arg_0: Email) => Promise<SubscribeResult>,
}
