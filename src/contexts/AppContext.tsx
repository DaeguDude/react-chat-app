import React, { createContext, Dispatch, useContext, useReducer } from "react";

export interface AppInfoState {
  currentUserId: number;
  selectedChatRoomId: number;
}

const initialAppState: AppInfoState = {
  currentUserId: 0,
  selectedChatRoomId: 0,
};

export const AppInfoContext = createContext<AppInfoState>(initialAppState);
export const AppInfoDispatchContext = createContext<Dispatch<AppInfoAction>>(
  () => null
);

interface IAppInfoProvider {
  children: React.ReactNode;
}

export function AppInfoProvider({ children }: IAppInfoProvider) {
  const [appInfo, dispatch] = useReducer(appInfoReducer, initialAppState);

  return (
    <AppInfoContext.Provider value={appInfo}>
      <AppInfoDispatchContext.Provider value={dispatch}>
        {children}
      </AppInfoDispatchContext.Provider>
    </AppInfoContext.Provider>
  );
}

export type AppInfoAction =
  | {
      type: "changed_user";
      userId: number;
    }
  | {
      type: "changed_chatRoom";
      chatRoomId: number;
    };

export function appInfoReducer(
  state: AppInfoState,
  action: AppInfoAction
): AppInfoState {
  switch (action.type) {
    case "changed_user": {
      return {
        ...state,
        currentUserId: action.userId,
      };
    }

    case "changed_chatRoom": {
      return {
        ...state,
        selectedChatRoomId: action.chatRoomId,
      };
    }

    default: {
      throw Error("잘못된 액션입니다: " + action);
    }
  }
}

export function useAppInfo() {
  const appInfo = useContext(AppInfoContext);
  return appInfo;
}

export function useAppInfoDispatch() {
  const dispatch = useContext(AppInfoDispatchContext);
  return dispatch;
}
