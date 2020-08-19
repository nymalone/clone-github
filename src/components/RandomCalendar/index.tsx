import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns'; // subtrair anos

import { Container } from './styles';

type HeatmapValue = {date: Date; count: number; } // data é o dia no calendario, count é o tanto que a pessoa contribuiu

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1); // aqui eu subtraio 1 ano da data atual
  const endDate = new Date(); //dia de hoje! o mapa é de um ano atrás (startDate) até a data de hoje.

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5} // tamanho do quadradinho
          classForValue={(item: HeatmapValue) => {
            let clampledCount = 0;

            if (item !== null ) { // vai ficar sempre em um range de 0 e 4
              clampledCount = Math.max(item.count, 0)
              clampledCount = Math.min(item.count, 4) // dessa forma se a pessoa contribuiu mais que 4 vezes, ela vai ser redirecionada para o 4
            }

            return `scale-${clampledCount}`
          }} //forma que vou estilizar cada item interno com base na qtd de contribuições
          showWeekdayLabels
        />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values:  HeatmapValue[] = [];

  let currentDate = startDate;
  // enquanto o dia atual for menor que o dia de fim vou manter o loop de dentro
  // caso contrário ele chegue no dia final tbm vou manter o loop
  while(isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1)
  }

  return values;
};

export default RandomCalendar;
