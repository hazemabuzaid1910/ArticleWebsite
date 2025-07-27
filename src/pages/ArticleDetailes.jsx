import React, { useEffect, useState } from 'react';
import { Calendar, User, Eye, Share2, Heart, Bookmark, Tag } from 'lucide-react';
import useBlogListStore from '../store/BlogListStore';
import useUserList from '../store/UserListStore';
import { useParams } from 'react-router-dom';

const ArticleContent = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
const {getArticleDetailes,getTags,tags,articleDetailes}=useBlogListStore()
const {getUser,userdata}=useUserList()
  const { id } = useParams();
useEffect(()=>{
    getArticleDetailes(id)
    getTags()
    getUser(articleDetailes.uid?.[0].target_id)
},[])
console.log(articleDetailes)
console.log(tags)
console.log(userdata)
  const articleData = {

    readTime: "5 min read",
    views: "1,234"
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="py-8 mx-auto max-w-7xl">
      {/* Article Header */}
      <div className="mb-8 overflow-hidden bg-white shadow-sm">
        <div className="relative h-96">
          <img 
            src={articleDetailes?.field_image?.[0].url} 
            alt={articleDetailes?.field_image?.[0].alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center mb-4 space-x-4">
              <span className="px-3 py-1 text-sm font-medium bg-orange-500 rounded-full">
                Featured
              </span>
              <div className="flex items-center space-x-2 text-sm">
                <Eye className="w-4 h-4" />
                <span>{articleData.views}</span>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              {articleDetailes.title?.[0].value}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Actions */}
      <div className="flex justify-end mb-6 space-x-4">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            isLiked ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          <span>Like</span>
        </button>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            isBookmarked ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          <span>Save</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>

      {/* Article Meta */}
      <div className="p-6 mb-8 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {userdata?.user_picture?.[0]?.url ?
              <img src={userdata?.user_picture?.[0]?.url} alt="" className='rounded-full w-15 h-15'/>
              :<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500">
                <User className="w-6 h-6 text-white" />
              </div>}
              <div>
                <p className="font-semibold text-gray-900">{userdata.name?.[0].value}</p>
                <p className="text-sm text-gray-500">Article Author</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{formatDate(articleDetailes.created?.[0].value)}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{articleData.readTime}</span>
            </div>
          </div>
<div className="flex items-center space-x-2">
  <Tag className="w-4 h-4 text-gray-400" />
  {articleDetailes?.field_tags?.map((tag, index) => {
    const matchedTag = tags.find(t => t.id === String(tag.target_id));
    return (
      <span
        key={index}
        className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 "
      >
        {matchedTag?.name }
      </span>
    );
  })}
</div>



        </div>
      </div>

      {/* Article Content */}
   <div className="p-8 mb-8 bg-white shadow-sm">
    <h1 className='font-bold text-[28px] mb-5'>{articleDetailes.title?.[0].value}</h1>
  <div
    className="prose prose-lg max-w-none"
    dangerouslySetInnerHTML={{ __html: articleDetailes.body?.[0].value }}
  />
   <div
    className="prose prose-lg max-w-none"
    dangerouslySetInnerHTML={{ __html: articleDetailes.body?.[0].processed }}
  />
</div>


      {/* Image Gallery */}
      <div className="p-8 mb-8 bg-white shadow-sm">
        <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
          <div className="w-1 h-8 mr-3 bg-orange-500 rounded-full"></div>
          Image Gallery
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articleDetailes.field_gallery?.map((image, index) => (
            <div key={index} className="relative overflow-hidden bg-gray-100 group rounded-xl">
              <img 
                src={image.url} 
                alt={image.alt}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-opacity-0 group-hover:bg-opacity-30">
                <Eye className="w-6 h-6 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Footer */}
      <div className="p-6 bg-white shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col space-y-2">
            <div className="text-sm text-gray-500">
              Publication date: {formatDate(articleDetailes.created?.[0].value)}
            </div>
            <div className="text-sm text-gray-500">
      Last update: {formatDate(articleDetailes.changed?.[0].value)}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{articleData.views} views</span>
            </div>
            <button className="flex items-center px-6 py-2 space-x-2 text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 hover:shadow-lg">
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;