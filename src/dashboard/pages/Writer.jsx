import React from 'react'
import { FaPlus ,FaEye,FaEdit} from 'react-icons/fa';
function Writer() {
     const usersData = [
    { id: 1, name:'Ahmad mohammad', email: 'ahmed@example.com', role: 'Writer', status: 'Active', joinDate: '2024-01-01' },
    { id: 2, name:'Fatima ali', email: 'fatima@example.com', role: 'Editor', status: 'Active', joinDate: '2024-01-02' },
    { id: 3, name:'mohammad hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' },
      { id: 4, name:'Farah hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' },
    { id: 5, name:'mohammad hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' },
          { id: 6, name:'Qusai hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Active', joinDate: '2024-01-03' },
    { id: 7, name:'Amir hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' },
          { id: 8, name:'Kareem hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' },
    { id: 9, name:'Naya hasan', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' }
];
  return (
    <div>
        
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-[var(--primary-color)]">Writers</h1>
              <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                <FaPlus size={16} />
                 new writer
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {usersData.filter(user => user.role === 'Writer').map((writer) => (
                <div key={writer.id} className="p-6 bg-gray-200  rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
                      <span className="font-bold text-white">{writer.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-color)]">{writer.name}</h3>
                      <p className="text-sm text-gray-400">{writer.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs text-white ${
                      writer.status === 'Active' 
                        ? 'bg-red-400'
                        : 'bg-green-400'
                    }`}>
                      {writer.status === 'Active' ? 'not active' : ' active'}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-400 rounded hover:bg-blue-400 hover:text-white">
                        <FaEye size={16} />
                      </button>
                      <button className="p-2 text-green-400 rounded hover:bg-green-400 hover:text-white">
                        <FaEdit size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
    </div>
  )
}

export default Writer