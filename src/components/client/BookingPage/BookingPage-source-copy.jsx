//****************************//
//This example use class component
//instead of function component.
//Please be careful since useState cannot be
//used in class component.
//****************************//
import './styles.css';
import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import 'react-datepicker/dist/react-datepicker.css';

const arrDates = [
  new Date(2023, 4, 20, 8, 15), //Thu May 20 2021 08:15:00
  new Date(2023, 4, 20, 8, 45), //Fri May 20 2021 08:45:00
  new Date(2023, 4, 21, 8, 30), //Sat May 21 2021 08:30:00
  new Date(2023, 4, 21, 9, 0), //Sat May 21 2021 09:00:00
];

class BookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: setHours(setMinutes(new Date(2023, 4, 20, 8, 30), 0), 8),
      excludedTimes: [],
    };
  }

  handleSelectedDate = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  getExcludedTimes = (date) => {
    let arrSpecificDates = [];
    for (let i = 0; i < arrDates.length; i++) {
      if (
        moment(date, moment.ISO_8601).format('YYYY/MM/DD') ===
        moment(arrDates[i], moment.ISO_8601).format('YYYY/MM/DD')
      ) {
        arrSpecificDates.push(moment(arrDates[i], moment.ISO_8601).toObject());
      }
    }

    let arrExcludedTimes = [];
    for (let i = 0; i < arrSpecificDates.length; i++) {
      arrExcludedTimes.push(
        setHours(
          setMinutes(new Date(), arrSpecificDates[i].minutes),
          arrSpecificDates[i].hours
        )
      );
      this.setState({
        excludedTimes: arrExcludedTimes,
      });
    }
  };

  render() {
    const { selectedDate, excludedTimes } = this.state;
    return (
      <div className="container">
        <DatePicker
          selected={selectedDate}
          onChange={this.handleSelectedDate}
          onSelect={this.getExcludedTimes}
          popperPlacement="top-start"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
        <DatePicker
          selected={selectedDate}
          excludeTimes={excludedTimes}
          onChange={this.handleSelectedDate}
          onSelect={this.getExcludedTimes}
          popperPlacement="top-start"
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeFormat="HH:mm"
          dateFormat="hh:mm aa"
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 45), 14)}
        />
      </div>
    );
  }
}
//export default BookingPage;
