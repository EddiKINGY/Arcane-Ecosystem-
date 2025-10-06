import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts';
import Card from './Card';
import { TOKEN_PRICE_HISTORY_DATA } from '../constants';
import type { TokenPricePoint } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-arcane-secondary p-4 rounded-lg border border-gray-200 dark:border-arcane-primary text-sm shadow-lg">
        <p className="font-bold text-gray-900 dark:text-white">{`Date: ${label}`}</p>
        <p className="text-arcane-cyan">{`Price: $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const TokenDetails: React.FC = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    
    const chartColors = {
        grid: isDarkMode ? 'rgba(42, 32, 90, 0.5)' : '#e5e7eb',
        tick: isDarkMode ? '#a78bfa' : '#6b7280',
        area: isDarkMode ? '#c084fc' : '#7e22ce',
        gradientFrom: isDarkMode ? '#7e22ce' : '#c084fc',
        gradientTo: isDarkMode ? 'rgba(126, 34, 206, 0.1)' : 'rgba(192, 132, 252, 0.1)',
    };

    return (
        <Card isGlow>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">ARC Price</p>
                    <div className="flex items-baseline space-x-2">
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">$1.45</p>
                        <p className="text-green-500 font-semibold">+5.12%</p>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Market Cap</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$1.45B</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Volume (24h)</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$87.3M</p>
                </div>
                 <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Circulating Supply</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">725M ARC</p>
                </div>
            </div>
            <div className="h-80">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={TOKEN_PRICE_HISTORY_DATA}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColors.gradientFrom} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={chartColors.gradientTo} stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                        <XAxis 
                            dataKey="date" 
                            stroke={chartColors.tick} 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false}
                        />
                        <YAxis 
                            stroke={chartColors.tick} 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false}
                            tickFormatter={(value: number) => `$${value.toFixed(2)}`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke={chartColors.area}
                            strokeWidth={2}
                            fillOpacity={1} 
                            fill="url(#colorPrice)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default TokenDetails;
