import axios from '../../utils/axios'

export const getLiveMatches = async (dispatch: Function, league_id) => {
  dispatch({ type: 'LIVE_MATCHES_LOADING' })
  try {
    const { data } = await axios.get(`/fixtures/live/${league_id}`)
    return dispatch({
      type: 'GET_LIVE_MATCHES',
      data: data.api.fixtures
    })
  } catch (error) {
    console.log(error.response)
  }
}

export const getSingleMatch = async (
  dispatch: Function,
  fixture_id: number
) => {
  dispatch({ type: 'SINGLE_MATCH_LOADING' })
  try {
    const { data } = await axios.get(`/fixtures/id/${fixture_id}`)
    return dispatch({
      type: 'GET_SINGLE_MATCH',
      data: data.api.fixtures[0]
    })
  } catch (error) {
    console.log(error.response)
  }
}

export const getSingleMatchStats = async (
  dispatch: Function,
  fixture_id: number
) => {
  dispatch({ type: 'SINGLE_MATCH_STAT_LOADING' })
  try {
    const { data } = await axios.get(`/statistics/fixture/${fixture_id}`)
    return dispatch({
      type: 'GET_SINGLE_MATCH_STAT',
      data: data.api.statistics
    })
  } catch (error) {
    console.log(error.response)
  }
}

export const getSingleMatchEvents = async (
  dispatch: Function,
  fixture_id: number
) => {
  dispatch({ type: 'SINGLE_MATCH_EVENTS_LOADING' })
  try {
    const { data } = await axios.get(`/events/${fixture_id}`)
    return dispatch({
      type: 'GET_SINGLE_MATCH_EVENTS',
      data: data.api.events
    })
  } catch (error) {
    console.log(error.response)
  }
}

export const getUpcomingMatches = async (dispatch: Function, league_id) => {
  dispatch({ type: 'UPCOMING_LOADING' })
  try {
    const { data } = await axios.get(`/fixtures/league/${league_id}`)
    return dispatch({
      type: 'GET_UPCOMING_MATCHES',
      data: data.api.fixtures
    })
  } catch (error) {
    console.log(error.response)
  }
}

export const changeLeague = async (dispatch: Function, league_id: number) => {
  return dispatch({
    type: 'CHANGE_LEAGUE',
    data: league_id
  })
}
