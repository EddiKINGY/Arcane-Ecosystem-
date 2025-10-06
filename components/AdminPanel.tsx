import React, { useState, useEffect } from 'react';
import { MOCK_USERS, SYSTEM_STATUS } from '../constants';
import type { AdminUser, SystemStatus } from '../types';
import { AdminIcon, VerifyIcon, BanIcon, ServerIcon } from './icons';

// Helper functions for localStorage persistence
const getAdminUsers = (): AdminUser[] => {
  if (typeof window === 'undefined') return MOCK_USERS;
  const savedUsers = localStorage.getItem('arcaneAdminUsers');
  return savedUsers ? JSON.parse(savedUsers) : MOCK_USERS;
};

const saveAdminUsers = (users: AdminUser[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('arcaneAdminUsers', JSON.stringify(users));
  }
};

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'status'>('users');
  const [users, setUsers] = useState<AdminUser[]>([]);

  useEffect(() => {
    const loadedUsers = getAdminUsers();
    // If local storage is empty, populate it with mock data
    if (localStorage.getItem('arcaneAdminUsers') === null) {
      saveAdminUsers(loadedUsers);
    }
    setUsers(loadedUsers);
  }, []);
  
  const handleToggleVerify = (userId: string) => {
      const updatedUsers = users.map(user => 
          user.id === userId ? { ...user, isVerified: !user.isVerified } : user
      );
      setUsers(updatedUsers);
      saveAdminUsers(updatedUsers);
  };
  
  const handleToggleBan = (userId: string) => {
      const updatedUsers = users.map(user => 
          user.id === userId ? { ...user, isBanned: !user.isBanned } : user
      );
      setUsers(updatedUsers);
      saveAdminUsers(updatedUsers);
  };
  
  const StatusIndicator: React.FC<{ status: SystemStatus['status'] }> = ({ status }) => {
    const color = {
      Online: 'bg-green-500',
      Degraded: 'bg-yellow-500',
      Offline: 'bg-red-500',
    }[status];
    return <span className={`w-3 h-3 rounded-full ${color}`}></span>;
  };

  return (
    <div className="p-8 sm:p-12 text-gray-900 dark:text-arcane-text">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <AdminIcon className="w-8 h-8" />
            Admin Panel
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Ecosystem Management & Oversight</p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200 dark:border-arcane-primary mb-8">
        <button onClick={() => setActiveTab('users')} className={`px-6 py-3 font-semibold text-sm transition ${activeTab === 'users' ? 'text-arcane-accent dark:text-arcane-highlight border-b-2 border-arcane-accent' : 'text-gray-500 dark:text-gray-400'}`}>User Management</button>
        <button onClick={() => setActiveTab('status')} className={`px-6 py-3 font-semibold text-sm transition ${activeTab === 'status' ? 'text-arcane-accent dark:text-arcane-highlight border-b-2 border-arcane-accent' : 'text-gray-500 dark:text-gray-400'}`}>System Status</button>
      </div>

      {/* Content */}
      <div className="animate-fade-in" style={{ animationDuration: '0.3s' }}>
        {activeTab === 'users' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Manage Users ({users.length})</h2>
            <div className="overflow-x-auto crystalline-card p-4">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-200 dark:border-arcane-primary/50 text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="p-3">Username</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id} className="border-b border-gray-200/50 dark:border-arcane-secondary/50">
                      <td className="p-3 font-semibold text-gray-900 dark:text-white">{user.username}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <div className="flex gap-2 items-center">
                          {user.isVerified && <span className="text-xs font-semibold bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full">Verified</span>}
                          {user.isBanned && <span className="text-xs font-semibold bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-0.5 rounded-full">Banned</span>}
                        </div>
                      </td>
                      <td className="p-3">
                          <div className="flex justify-center gap-2">
                              <button onClick={() => handleToggleVerify(user.id)} className={`p-2 rounded-lg ${user.isVerified ? 'bg-green-500/20 text-green-500' : 'bg-gray-200 dark:bg-arcane-secondary text-gray-500'} transition`} title={user.isVerified ? 'Un-verify' : 'Verify'}>
                                  <VerifyIcon className="w-4 h-4" />
                              </button>
                               <button onClick={() => handleToggleBan(user.id)} className={`p-2 rounded-lg ${user.isBanned ? 'bg-red-500/20 text-red-500' : 'bg-gray-200 dark:bg-arcane-secondary text-gray-500'} transition`} title={user.isBanned ? 'Un-ban' : 'Ban'}>
                                  <BanIcon className="w-4 h-4" />
                              </button>
                          </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
           <div>
             <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">System Services Status</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SYSTEM_STATUS.map(service => (
                    <div key={service.serviceName} className="crystalline-card p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <StatusIndicator status={service.status} />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">{service.serviceName}</p>
                                <p className={`text-xs font-bold ${
                                    service.status === 'Online' ? 'text-green-500' :
                                    service.status === 'Degraded' ? 'text-yellow-500' : 'text-red-500'
                                }`}>{service.status}</p>
                            </div>
                        </div>
                        <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
                            {service.status !== 'Offline' ? `${service.latency}ms` : '--'}
                        </p>
                    </div>
                ))}
             </div>
             <div className="text-center mt-8">
                <p className="text-xs text-gray-500 dark:text-gray-400">Last checked: {new Date().toLocaleString()}</p>
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
