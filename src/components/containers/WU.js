import Base from './Base';
import axios from 'axios';

class WU extends Base {
  constructor(props) {
    super(props);
    this.state.info = {
      site: 'WeatherUndeground',
      key: '055b0e18b78261f4',
      cityId: 'Kiev'
    }
  }

  load() {
    axios.get(`http://api.wunderground.com/api/${this.state.info.key}/conditions/q/CA/${this.state.info.cityId}.json`)
      .then(({data}) => {
        //console.log(data);

        let input = {
          name: data.current_observation.display_location.city,
          country: data.current_observation.display_location.state_name,
          temp: data.current_observation.temp_c,
          humidity: data.current_observation.relative_humidity,
          wind_kph: data.current_observation.wind_kph,
          description: data.current_observation.icon,
          last_updated: data.current_observation.observation_time_rfc822
        }
        this.setState({
          data: input
        })
      })
  }
}

export default WU;