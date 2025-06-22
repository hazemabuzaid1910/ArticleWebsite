import React from 'react'
import { FaPlus } from 'react-icons/fa';
import DataTable from '../components/DataTable';
function Users() {
      const usersData = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', role: 'Writer', status: 'Active', joinDate: '2024-01-01' },
    { id: 2, name: 'فاطمة علي', email: 'fatima@example.com', role: 'Editor', status: 'Active', joinDate: '2024-01-02' },
    { id: 3, name: 'محمد حسن', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' }
  ];
  return (
        
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h1 className="text-3xl font-bold text-[var(--primary-color)]">Users</h1>
                      <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                        <FaPlus size={16} />
Add user                      </button>
                    </div>
            
                    <DataTable
                      data={usersData}
                      columns={[
                        { key: 'name', header: 'Name' },
                        { key: 'email', header: ' Email Address' },
                        { key: 'role', header: 'Role' },
                        { 
                          key: 'status', 
                          header: 'State',
                          render: (status) => (
                            <span className={`px-2 py-1 rounded text-xs text-white ${
                              status === 'Active' 
                                ? 'bg-green-500 bg-opacity-20 text-green-400'
                                : 'bg-red-500 bg-opacity-20 text-red-400'
                            }`}>
                              {status === 'Active' ? 'active' : ' not active'}
                            </span>
                          )
                        },
                        { key: 'joinDate', header: '' }
                      ]}
                      onView={(row) => console.log('View:', row)}
                      onEdit={(row) => console.log('Edit:', row)}
                      onDelete={(row) => console.log('Delete:', row)}
                    />
                  </div>
                );
  
}

export default Users