import React from 'react'
import { FaPlus} from 'react-icons/fa';
import DataTable from '../components/DataTable';
function Articles() {
      const articlesData = [
    { id: 1, title: 'How to Learn React', author: 'أحمد محمد', status: 'Published', views: 1234, date: '2024-01-15' },
    { id: 2, title: 'JavaScript Best Practices', author: 'فاطمة علي', status: 'Draft', views: 856, date: '2024-01-14' },
    { id: 3, title: 'CSS Grid Tutorial', author: 'محمد حسن', status: 'Published', views: 2341, date: '2024-01-13' }
     ];
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h1 className="text-3xl font-bold text-[var(--primary-color)]">Article</h1>
                      <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                        <FaPlus size={16} />
                      </button>
                    </div>
                    
                    <DataTable
                      data={articlesData}
                      columns={[
                        { key: 'title', header: 'العنوان' },
                        { key: 'author', header: 'الكاتب' },
                        { 
                          key: 'status', 
                          header: 'الحالة',
                          render: (status) => (
                            <span className={`px-2 py-1 rounded text-xs ${
                              status === 'Published' 
                                ? 'bg-green-500 bg-opacity-20 text-green-400'
                                : 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                            }`}>
                              {status === 'Published' ? 'منشور' : 'مسودة'}
                            </span>
                          )
                        },
                        { key: 'views', header: 'المشاهدات' },
                        { key: 'date', header: 'التاريخ' }
                      ]}
                      onView={(row) => console.log('View:', row)}
                      onEdit={(row) => console.log('Edit:', row)}
                      onDelete={(row) => console.log('Delete:', row)}
                    />
                  </div>
)
                    
}

export default Articles