  import { Search, Filter, Calendar, User, Clock, BookOpen, Star, Eye } from "lucide-react";

  import Data from '../data'
  const ArticleCard = ({ article, isGrid = true }) =>{
      const data=new Data()
    

     return(
    <div className={`bg-white  shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group ${
      isGrid ? '' : 'flex gap-6'
    }`}>

      <div className={`relative overflow-hidden ${isGrid ? 'aspect-video' : 'w-64 flex-shrink-0'}`}>
        <img 
          src={article.image} 
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {article.featured && (
          <div className="absolute px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-full top-3 left-3">
            Featured
          </div>
        )}
        <div className="absolute flex items-center gap-1 px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded-full top-3 right-3">
          <Eye size={12} />
          {article.views}
        </div>
      </div>
      
      <div className={`p-6 ${isGrid ? '' : 'flex-1'}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1  text-xs font-medium ${
            data.categoriees.find(cat => cat.name === article.category)?.color || 'bg-gray-100 text-gray-700'
          }`}>
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="text-sm text-gray-600">{article.rating}</span>
          </div>
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={article.authorImage} 
              alt={article.author}
              className="object-cover w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{article.author}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar size={12} />
                {new Date(article.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock size={14} />
            {article.readTime}
          </div>
        </div>
      </div>
    </div>
  )};
  export default ArticleCard