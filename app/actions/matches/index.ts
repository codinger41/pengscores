export const getLiveMatches = async (dispatch: Function) => {
  dispatch({ type: 'LIVE_MATCHES_LOADING' })
  return dispatch({
    type: 'GET_LIVE_MATCHES',
    data: [
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
  })
}
