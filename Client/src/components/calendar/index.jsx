import './calendar.css';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { getCitas } from '../../redux/actions';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';

dayjs.locale("es");
dayjs.extend(utc);
dayjs.extend(timezone);




function Calendario() {

  const messages = {
    allDay: "Todo el dia",
    previous: "Anterior",    
    next: "Siguiente",
    today:"Hoy",   
    month: "Mes",
    week: "Semana",
    day: "Dia",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
  }
  
  const localizer = dayjsLocalizer(dayjs)

  const dispatch = useDispatch();
  const citas = useSelector(state => state.citas)

  console.log( 'citas', citas)
 useEffect(() => {
  dispatch(getCitas());
}, [dispatch]);

const events = citas?.datosPagina?.map(cita => {
  // Parseamos la fecha y la hora de la cita en la zona horaria de Buenos Aires
  const fechaCita = dayjs.tz(cita.fechaCita, 'America/Argentina/Buenos_Aires');
  const horaCita = dayjs(cita.horaCita, 'HH:mm:ss');

  const startDateTime = fechaCita
    .set('hour', horaCita.hour())
    .set('minute', horaCita.minute())
    .set('second', 0)
    .set('millisecond', 0)
    .toDate();

  const endDateTime = dayjs(startDateTime).add(30, 'minute').toDate(); // Asumimos que la duración es de 30 minutos

  return {
    start: startDateTime,
    end: endDateTime,
    title: cita.titulo
  };
});

console.log('events', events);

  

  /*const events = [
    {
      start:dayjs('2024-05-20T23:00:00').toDate(),
      end:dayjs('2024-05-20T23:30:00').toDate(),
      title:"reunion"
    }
  ]*/
  
  return (
    <div>
      <div style={{
        height: "500px",
        width: "500px",
      }}>
        <Calendar
        localizer={localizer}
        events={events}
        messages={messages}
        ></Calendar>
          
      </div>
    </div>
  )
}

export default Calendario