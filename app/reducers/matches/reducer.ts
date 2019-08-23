export const initialState = {
  live: [],
  upcoming: [],
  liveLoading: false,
  upcomingLoading: false,
  liveError: null,
  upcomingError: null,
  singleMatch: null,
  singleMatchLoading: false,
  singleMatchStat: null,
  singleMatchStatLoading: false,
  singleMatchEvents: null,
  singleMatchEventsLoading: false,
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
    case 'SINGLE_MATCH_LOADING':
      return { ...state, singleMatchLoading: true }
    case 'GET_SINGLE_MATCH':
      return { ...state, singleMatch: action.data, singleMatchLoading: false }
    case 'SINGLE_MATCH_STAT_LOADING':
      return { ...state, singleMatchStatLoading: false }
    case 'GET_SINGLE_MATCH_STAT':
      return {
        ...state,
        singleMatchStat: action.data,
        singleMatchStatLoading: false
      }
    case 'SINGLE_MATCH_EVENTS_LOADING':
      return { ...state, singleMatchEventsLoading: false }
    case 'GET_SINGLE_MATCH_EVENTS':
      return {
        ...state,
        singleMatchEvents: action.data,
        singleMatchEventsLoading: false
      }
    default:
      return state
  }
}

export default MatchesReducer
