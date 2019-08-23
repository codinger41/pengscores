export const initialState = {
  live: [],
  upcoming: [],
  liveLoading: false,
  upcomingLoading: false,
  liveError: null,
  upcomingError: null,
  league: 'English Premier League'
}

type actionType = {
  type: string
  data: object
}

const MatchesReducer = (state: object = initialState, action: actionType) => {
  switch (action.type) {
    case 'LIVE_MATCHES_LOADING':
      return { ...state, liveLoading: true }
    case 'GET_LIVE_MATCHES':
      return { ...state, live: action.data, liveLoading: false }
    default:
      return state
  }
}

export default MatchesReducer
