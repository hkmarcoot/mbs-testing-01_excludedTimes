import React, { useState } from 'react';
import moment from 'moment';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import DatePicker from 'react-datepicker';
//import './react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';

const arrDates = [
  new Date(2022, 11, 7, 9, 15), //Thu May 20 2021 08:15:00
  new Date(2022, 11, 7, 9, 45), //Fri May 20 2021 08:45:00
  new Date(2022, 11, 8, 10, 30), //Sat May 21 2021 08:30:00
  new Date(2022, 11, 8, 10, 0), //Sat May 21 2021 09:00:00
];

const BookingPage = () => {
  //const [startDate, setStartDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [excludedTimes, setExcludedTimes] = useState(new Array());

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const gtExcludedTimes = (date) => {
    let arrSpecificDates = [];
    //***Initial the excluded time***//
    setExcludedTimes([]);
    //*******************************//
    //console.log(date);
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
      setExcludedTimes(arrExcludedTimes);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center content-center items-center">
      <header>
        <h4 className="font-courrier-new">Dovydas Lozys</h4>
        <img
          className="rounded-xl"
          src="https://ca.slack-edge.com/T6L933W4X-U02KCDMV9LH-7b5bec1757f2-512"
          width="100px"
          alt="pixel-character"
        ></img>
        <div>
          <h4 className="font-inder">60 min meeting</h4>
        </div>
      </header>
      <section className="font-inder color-dark-blue mt-5">
        <h1 className="bold text-dark-blue  bg-light-blue text-xl rounded-lg p-3 lg:text-2xl mb-5">
          Select Time and Date
        </h1>
        {/* <DatePicker
          selected={selectedDate}
          onChange={(date) => handleSelectedDate(date)}
          onSelect={(date) => gtExcludedTimes(date)}
          //popperPlacement="top-start"
          inline
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => handleSelectedDate(date)}
          onSelect={(date) => gtExcludedTimes(date)}
          excludeTimes={excludedTimes}
          //popperPlacement="top-start"
          inline
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeFormat="HH:mm"
          dateFormat="hh:mm aa"
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 45), 14)}
        /> */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            handleSelectedDate(date);
            console.log(date);
          }}
          onSelect={(date) => gtExcludedTimes(date)}
          excludeTimes={excludedTimes}
          showTimeSelect
          //showTimeSelectOnly
          timeIntervals={15}
          dateFormat="Pp"
          inline
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 45), 16)}
        />
      </section>
    </div>
  );
};

export default BookingPage;
