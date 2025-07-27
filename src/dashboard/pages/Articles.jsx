import React from 'react'
import { FaPlus} from 'react-icons/fa';
import DataTable from '../components/DataTable';
function Articles() {
   const articlesData = [
  { id: 1, title: 'How to Learn React', author: 'Ahmed Mohamed', status: 'Published', views: 1234, date: '2024-01-15' },
  { id: 2, title: 'JavaScript Best Practices', author: 'Fatima Ali', status: 'Draft', views: 856, date: '2024-01-14' },
  { id: 3, title: 'CSS Grid Tutorial', author: 'Mohamed Hassan', status: 'Published', views: 2341, date: '2024-01-13' },
  { id: 4, title: 'Understanding TypeScript', author: 'Sara Ibrahim', status: 'Published', views: 980, date: '2024-01-12' },
  { id: 5, title: 'Node.js Crash Course', author: 'Omar Khaled', status: 'Draft', views: 620, date: '2024-01-11' },
  { id: 6, title: 'Deploying with Vercel', author: 'Laila Samir', status: 'Published', views: 1503, date: '2024-01-10' },
  { id: 7, title: 'Mastering Git and GitHub', author: 'Ali Nour', status: 'Published', views: 1120, date: '2024-01-09' },
  { id: 8, title: 'Responsive Design Principles', author: 'Huda Nabil', status: 'Draft', views: 745, date: '2024-01-08' },
  { id: 9, title: 'State Management in React', author: 'Khalid Youssef', status: 'Published', views: 1872, date: '2024-01-07' },
  { id: 10, title: 'Building REST APIs with Express', author: 'Mona Adel', status: 'Published', views: 1349, date: '2024-01-06' }
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
                        { key: 'title', header: 'Title' },
                        { key: 'author', header: 'Writer' },
                        { 
                          key: 'status', 
                          header: 'Status',
                          render: (status) => (
                            <span className={`px-2 py-1 rounded text-xs text-white ${
                              status === 'Published' 
                                ? 'bg-green-500 bg-opacity-20 '
                                : 'bg-yellow-500 bg-opacity-20'
                            }`}>
                              {status === 'Published' ? 'published' : 'draft'}
                            </span>
                          )
                        },
                        { key: 'views', header: 'Views' },
                        { key: 'date', header: 'Date' }
                      ]}
                      onView={(row) => console.log('View:', row)}
                      onEdit={(row) => console.log('Edit:', row)}
                      onDelete={(row) => console.log('Delete:', row)}
                    />
                  </div>
)
                    
}

export default Articles