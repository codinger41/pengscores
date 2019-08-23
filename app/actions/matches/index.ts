const dummy = [
  {
    fixture_id: 128389,
    league_id: 294,
    event_date: '2019-07-07T20:30:00+00:00',
    event_timestamp: 1562531400,
    firstHalfStart: 1562531400,
    secondHalfStart: 1562535000,
    round: 'Regular Season - 23',
    status: 'Second Half',
    statusShort: '2H',
    elapsed: 75,
    venue: 'Talen Energy Stadium',
    referee: null,
    homeTeam: {
      team_id: 1599,
      team_name: 'Philadelphia Union',
      logo: 'https://media.api-football.com/teams/1599.png'
    },
    awayTeam: {
      team_id: 1598,
      team_name: 'Orlando City SC',
      logo: 'https://media.api-football.com/teams/1598.png'
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: '1-0',
      fulltime: null,
      extratime: null,
      penalty: null
    }
  },
  {
    fixture_id: 154848,
    league_id: 518,
    event_date: '2019-07-07T21:00:00+00:00',
    event_timestamp: 1562533200,
    firstHalfStart: 1562533200,
    secondHalfStart: 1562536800,
    round: 'Regular Season - 30',
    status: 'Second Half',
    statusShort: '2H',
    elapsed: 47,
    venue: "Children's Mercy Park",
    referee: null,
    homeTeam: {
      team_id: 4019,
      team_name: 'Swope Park Rangers',
      logo: 'https://media.api-football.com/teams/4019.png'
    },
    awayTeam: {
      team_id: 4021,
      team_name: 'Tampa Bay Rowdies',
      logo: 'https://media.api-football.com/teams/4021.png'
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: '0-2',
      fulltime: null,
      extratime: null,
      penalty: null
    }
  }
]

const singleMatchStat = {
  'Shots on Goal': {
    home: '5',
    away: '2'
  },
  'Shots off Goal': {
    home: '7',
    away: '4'
  },
  'Total Shots': {
    home: '17',
    away: '8'
  },
  'Blocked Shots': {
    home: '5',
    away: '2'
  },
  'Shots insidebox': {
    home: '12',
    away: '5'
  },
  'Shots outsidebox': {
    home: '5',
    away: '3'
  },
  Fouls: {
    home: '15',
    away: '14'
  },
  'Corner Kicks': {
    home: '9',
    away: '1'
  },
  Offsides: {
    home: '2',
    away: '2'
  },
  'Ball Possession': {
    home: '61%',
    away: '39%'
  },
  'Yellow Cards': {
    home: '2',
    away: '3'
  },
  'Red Cards': {
    home: '',
    away: ''
  },
  'Goalkeeper Saves': {
    home: '1',
    away: '4'
  },
  'Total passes': {
    home: '633',
    away: '414'
  },
  'Passes accurate': {
    home: '575',
    away: '365'
  },
  'Passes %': {
    home: '91%',
    away: '88%'
  }
}

const singleMatchEvents = [
  {
    elapsed: 46,
    team_id: 84,
    teamName: 'Philadelphia Union',
    player_id: 22177,
    player: 'Igniatius Ganago',
    type: 'Goal',
    detail: 'Normal Goal'
  },
  {
    elapsed: 54,
    team_id: 85,
    teamName: 'Orlando City SC',
    player_id: 273,
    player: 'Marco Verratti',
    type: 'Card',
    detail: 'Yellow Card'
  },
  {
    elapsed: 60,
    team_id: 85,
    teamName: 'Orlando City SC',
    player_id: 276,
    player: 'Neymar',
    type: 'Goal',
    detail: 'Penalty'
  },
  {
    elapsed: 61,
    team_id: 84,
    teamName: 'Philadelphia Union',
    player_id: 22177,
    player: 'Igniatius Ganago',
    type: 'subst',
    detail: 'Jean-Victor Makengo'
  },
  {
    elapsed: 66,
    team_id: 85,
    teamName: 'Orlando City SC',
    player_id: 271,
    player: 'Leandro Paredes',
    type: 'subst',
    detail: 'Layvin Kurzawa'
  },
  {
    elapsed: 66,
    team_id: 85,
    teamName: 'Orlando City SC',
    player_id: 267,
    player: 'Julian Draxler',
    type: 'subst',
    detail: 'Moussa Diaby'
  },
  {
    elapsed: 69,
    team_id: 84,
    teamName: 'Philadelphia Union',
    player_id: 3165,
    player: 'Youcef Atal',
    type: 'Card',
    detail: 'Yellow Card'
  },
  {
    elapsed: 75,
    team_id: 84,
    teamName: 'Philadelphia Union',
    player_id: 22173,
    player: 'Allan Saint-Maximin',
    type: 'subst',
    detail: 'Mickaël Le Bihan'
  },
  {
    elapsed: 89,
    team_id: 84,
    teamName: 'Swope Park Rangers',
    player_id: 22161,
    player: 'Patrick Burner',
    type: 'subst',
    detail: 'Bassem Srarfi'
  },
  {
    elapsed: 90,
    team_id: 84,
    teamName: 'Swope Park Rangers',
    player_id: 22163,
    player: 'Dante',
    type: 'Card',
    detail: 'Yellow Card'
  },
  {
    elapsed: 90,
    team_id: 84,
    teamName: 'Philadelphia Union',
    player_id: 22164,
    player: 'Christophe Herelle',
    type: 'Card',
    detail: 'Yellow Card'
  },
  {
    elapsed: 90,
    team_id: 85,
    teamName: 'Orlando City SC',
    player_id: 274,
    player: 'Edinson Cavani',
    type: 'Card',
    detail: 'Yellow Card'
  },
  {
    elapsed: 90,
    team_id: 85,
    teamName: 'Orlando City SC',
    player_id: 274,
    player: 'Edinson Cavani',
    type: 'Goal',
    detail: 'Missed Penalty'
  }
]

export const getLiveMatches = async (dispatch: Function) => {
  dispatch({ type: 'LIVE_MATCHES_LOADING' })
  return dispatch({
    type: 'GET_LIVE_MATCHES',
    data: dummy
  })
}

export const getSingleMatch = async (
  dispatch: Function,
  fixture_id: number
) => {
  dispatch({ type: 'SINGLE_MATCH_LOADING' })
  return dispatch({
    type: 'GET_SINGLE_MATCH',
    data: dummy.filter(d => d.fixture_id === fixture_id)[0]
  })
}

export const getSingleMatchStats = async (
  dispatch: Function,
  fixture_id: number
) => {
  dispatch({ type: 'SINGLE_MATCH_STAT_LOADING' })
  return dispatch({
    type: 'GET_SINGLE_MATCH_STAT',
    data: singleMatchStat
  })
}

export const getSingleMatchEvents = async (
  dispatch: Function,
  fixture_id: number
) => {
  dispatch({ type: 'SINGLE_MATCH_EVENTS_LOADING' })
  return dispatch({
    type: 'GET_SINGLE_MATCH_EVENTS',
    data: singleMatchEvents
  })
}
