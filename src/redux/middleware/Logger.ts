/* eslint-disable @typescript-eslint/no-explicit-any */
const Logger = (state: any) => (next: any) => (action: any) => {
  console.log("current State =>", state.getState());
  console.log("Action =>", action);
  next(action);
  console.log("update State =>", state.getState());
};

export default Logger;
