import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { withRouter } from 'react-router-dom';

const data = {
  john: [
    { name: 'Productivity', value: 400 },
    { name: 'Problem Solving', value: 300 },
    { name: 'Results oriented', value: 300 },
    { name: 'Attitude', value: 200 }
  ],
  mike: [
    { name: 'Productivity', value: 200 },
    { name: 'Problem Solving', value: 400 },
    { name: 'Results oriented', value: 300 },
    { name: 'Attitude', value: 300 }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class DataChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    const userId = this.props.match.params.user;
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={userId ? data[userId] : []}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'>
          {userId &&
            data[userId].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}

export default withRouter(DataChart);
