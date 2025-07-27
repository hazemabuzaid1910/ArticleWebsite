import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa';
import DataTable from '../components/DataTable';
import useUSerList from '../../store/UserListStore';
function Users() {
  const {getUsers,data}=useUSerList();
  useEffect(()=>{
    getUsers();
    console.log(data?.rows)
  },[])

  return (
        
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h1 className="text-3xl font-bold text-[var(--primary-color)]">Users</h1>
                      <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                        <FaPlus size={16} />
Add user                      </button>
                    </div>
            
                    <DataTable
                      data={data?.rows??[]}
                      columns={[
                        { key: 'name', header: 'Name' },
                        { key: 'mail', header: ' Email Address' },
                        { key: 'field_mobile', header: 'mobile number' },
                        { 
                          key: 'status', 
                          header: 'State',
                          render: (status) => (
                            <span className={`px-2 py-1 rounded text-xs text-white ${
                              status === '1' 
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