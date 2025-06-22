import React from 'react'
import StatsCard from '../components/StatsCard';
import { FaHome, FaSearch, FaEye, FaEdit, FaTrash, FaPlus, FaUsers, FaFileAlt, FaPen, FaChartLine } from 'react-icons/fa';
import DataTable from '../components/DataTable';
function Home() {
          const articlesData = [
    { id: 1, title: 'How to Learn React', author: 'أحمد محمد', status: 'Published', views: 1234, date: '2024-01-15' },
    { id: 2, title: 'JavaScript Best Practices', author: 'فاطمة علي', status: 'Draft', views: 856, date: '2024-01-14' },
    { id: 3, title: 'CSS Grid Tutorial', author: 'محمد حسن', status: 'Published', views: 2341, date: '2024-01-13' }
  ];
  return (
    <div>
          <div className="space-y-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title=" Total Atricles"
                value="1,234"
                icon={<FaFileAlt color="#FFFFFF" size={24} />}
                color="bg-blue-500 bg-opacity-20"
                change={12}
              />
              <StatsCard
                title="Users"
                value="856"
                icon={<FaUsers color="#FFFFFF" size={24} />}
                color="bg-cyan-500 bg-opacity-20"
                change={8}
              />
              <StatsCard
                title="Writers"
                value="42"
                icon={<FaPen color="#FFFFFF" size={24} />}
                color="bg-purple-500 "
                change={-2}
              />
              <StatsCard
                title="Views"
                value="98,742"
                icon={<FaChartLine color="#FFFFFF" size={24} />}
                color="bg-orange-500 bg-opacity-20"
                change={25}
              />
            </div>

            {/* Recent Articles */}
            <div className=" bg-[var(--secondary-color)]  border-gray-700 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[var(--primary-color)]"> Latest Articles</h2>
                <button className="px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
               Show All
                </button>
              </div>
            
                <DataTable
                data={articlesData.slice(0, 3)}
                columns={[
                  { key: 'title', header: 'Address' },
                  { key: 'author', header: 'Book' },
                  { 
                    key: 'status', 
                    header: 'State',
                    render: (status) => (
                      <span className={`px-2 py-1 rounded text-xs text-white ${
                        status === 'Published' 
                          ? 'bg-green-500 bg-opacity-20'
                          : 'bg-yellow-500 bg-opacity-20 '
                      }`}>
                        {status === 'Published' ? 'posted' : 'مسودة'}
                      </span>
                    )
                  },
                  { key: 'views', header: 'Views' }
                ]}
                onView={(row) => console.log('View:', row)}
                onEdit={(row) => console.log('Edit:', row)}
                onDelete={(row) => console.log('Delete:', row)}
              />
            </div>
          </div>
        
    </div>
  )
}

export default Home