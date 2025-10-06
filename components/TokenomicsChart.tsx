
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TOKENOMICS_DATA, AIRDROP_SPLIT_DATA } from '../constants';
import type { TokenomicItem, AirdropSplitItem } from '../types';
import Card from './Card';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: TokenomicItem = payload[0].payload;
    return (
      <div className="bg-arcane-secondary p-4 rounded-lg border border-arcane-primary text-sm">
        <p className="font-bold text-white">{`${data.name}: ${data.value}%`}</p>
        <p className="text-gray-400">{`${data.tokens} ARC`}</p>
        <p className="text-gray-400 italic mt-1">{`Notes: ${data.notes}`}</p>
      </div>
    );
  }
  return null;
};

const TokenomicsChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <Card className="lg:col-span-2 h-[500px]">
        <h3 className="text-2xl font-bold text-white mb-4">ARC Token Distribution</h3>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={TOKENOMICS_DATA}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {TOKENOMICS_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
              formatter={(value, entry) => <span className="text-gray-300 ml-2">{`${value} (${entry.payload.value}%)`}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>
      
      <Card className="h-full">
        <h3 className="text-2xl font-bold text-white mb-6">Airdrop Pool Split (300M ARC)</h3>
        <div className="space-y-4">
          {AIRDROP_SPLIT_DATA.map((item, index) => (
            <div key={item.name}>
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-gray-300">{item.name}</span>
                <span className="font-semibold text-white">{item.value}%</span>
              </div>
              <div className="w-full bg-arcane-primary rounded-full h-2.5">
                <div 
                  className="bg-arcane-cyan h-2.5 rounded-full" 
                  style={{ width: `${item.value}%`, background: `linear-gradient(90deg, #7e22ce ${index*10}%, #08d9d6 100%)` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TokenomicsChart;
