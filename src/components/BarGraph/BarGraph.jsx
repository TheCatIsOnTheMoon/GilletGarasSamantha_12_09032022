import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function BarGraph({ data }) {
  //   console.log('data sessions :', data); //OK
  const barData = data.map((element, index) => {
    return element;
  });

  return (
    <BarChart
      width={870}
      height={300}
      data={barData}
      margin={{
        top: 5,
        right: 0,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid sstrokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" storke="grey" tickLine={false} tickMargin={10} />
      <YAxis
        dataKey="kilogram"
        orientation="right"
        domain={['dataMin - 2', 'dataMax + 1']}
        axisLine={false}
        tickLine={false}
        tickCount={3}
        tickMargin={20}
        tick={{ stroke: '#9B9EAC' }}
      />
      <Tooltip />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        barSize={7}
        radius={[50, 50, 0, 0]}
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        barSize={7}
        radius={[50, 50, 0, 0]}
      />
    </BarChart>
  );
}

export default BarGraph;
