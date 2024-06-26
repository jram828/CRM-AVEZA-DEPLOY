import "./calendar.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import { getCitas } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

dayjs.locale("es");
dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_TIMEZONE = "America/Argentina/Buenos_Aires";
dayjs.tz.setDefault(DEFAULT_TIMEZONE);

function Calendario() {
  const datos = JSON.parse(localStorage.getItem("loggedUser"));
  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
  };

  const localizer = dayjsLocalizer(dayjs);
  const dispatch = useDispatch();
  const citas = useSelector((state) => state.citas);
  const [citasId, setCitasId] = useState([]);
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    dispatch(getCitas());
  }, [dispatch]);
console.log('Citas calendario: ', citas)
  useEffect(() => {
    if (citas) {
      // const filteredCitas = datos.administrador
      //   ? citas.datosPagina
      //   : citas.datosPagina?.filter(
      //       (cita) =>
      //         (cita.nombreCliente === datos.nombre &&
      //           cita.apellidoCliente === datos.apellido) ||
      //         (cita.nombreAbogado === datos.nombre &&
      //           cita.apellidoAbogado === datos.apellido)
      //     );
      setCitasId(citas.datosPagina);
    }
  }, [citas, datos]);

  const events = citasId
    ?.map((cita) => {
      const fechaCita = dayjs.tz(
        cita.fechaCita,
        "America/Argentina/Buenos_Aires"
      );
      const [hour, minute, second] = cita.horaCita.split(":").map(Number);

      if (
        !fechaCita.isValid() ||
        isNaN(hour) ||
        isNaN(minute) ||
        isNaN(second)
      ) {
        console.error("Fecha o hora inválida:", cita.fechaCita, cita.horaCita);
        return null;
      }

      const startDateTime = fechaCita
        .set("hour", hour)
        .set("minute", minute)
        .set("second", 0)
        .set("millisecond", 0)
        .toDate();

      const endDateTime = dayjs(startDateTime).add(30, "minute").toDate();

      console.log("Fecha y hora de inicio:", startDateTime);
      console.log("Fecha y hora de fin:", endDateTime);

      return {
        start: startDateTime,
        end: endDateTime,
        title: cita.titulo,
        description: cita.descripcion || "No hay descripción",
      };
    })
    .filter((event) => event !== null);

  console.log("events", events);

  const handleSelectEvent = (event) => {
    setView("day");
    setDate(event.start);
  };

  return (
    <div>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          messages={messages}
          tooltipAccessor={(event) => event.description}
          onSelectEvent={handleSelectEvent}
          view={view}
          date={date}
          onNavigate={setDate}
          onView={setView}
        />
      </div>
    </div>
  );
}

export default Calendario;
