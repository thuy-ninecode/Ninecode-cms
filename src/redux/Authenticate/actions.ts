import ActionType from "./type";


export function login(recaptcha: string, payload: any, callbacks?: any) {
    return {
      type: ActionType.LOGIN,
      recaptcha,
      payload,
      callbacks,
    };
  }
  