import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../utils/blogData';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="block group">
        <article className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden h-64 md:h-full">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit" style={{ background: '#26c8ef20', color: '#26c8ef' }}>
                {post.category}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {post.publishedDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <article className="comprehensive_card_main h-full flex flex-col hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 animate-on-scroll">
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#26c8ef', color: '#000' }}>
              {post.category}
            </span>
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <Calendar className="h-4 w-4 mr-1.5" />
            {post.publishedDate}
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1.5" />
            {post.readTime}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-3">
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
