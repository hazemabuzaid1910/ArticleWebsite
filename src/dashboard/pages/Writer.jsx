import React from 'react'

function Writer() {
     const usersData = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', role: 'Writer', status: 'Active', joinDate: '2024-01-01' },
    { id: 2, name: 'فاطمة علي', email: 'fatima@example.com', role: 'Editor', status: 'Active', joinDate: '2024-01-02' },
    { id: 3, name: 'محمد حسن', email: 'mohamed@example.com', role: 'Writer', status: 'Inactive', joinDate: '2024-01-03' }
  ];
  return (
    <div>
        
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">الكتاب</h1>
              <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                <FaPlus size={16} />
                كاتب جديد
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {usersData.filter(user => user.role === 'Writer').map((writer) => (
                <div key={writer.id} className="p-6 bg-gray-800 border border-gray-700 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
                      <span className="font-bold text-white">{writer.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{writer.name}</h3>
                      <p className="text-sm text-gray-400">{writer.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs ${
                      writer.status === 'Active' 
                        ? 'bg-green-500 bg-opacity-20 text-green-400'
                        : 'bg-red-500 bg-opacity-20 text-red-400'
                    }`}>
                      {writer.status === 'Active' ? 'نشط' : 'غير نشط'}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-400 rounded hover:bg-blue-400 hover:bg-opacity-20">
                        <FaEye size={16} />
                      </button>
                      <button className="p-2 text-green-400 rounded hover:bg-green-400 hover:bg-opacity-20">
                        <FaEdit size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    </div>
  )
}

export default Writer