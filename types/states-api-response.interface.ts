import { StateInfo } from './state-info.interface';

export interface StatesApiResponse {
  status: string;
  'status-code': string;
  version: string;
  access: string;
  data: Record<string, StateInfo>;
}
