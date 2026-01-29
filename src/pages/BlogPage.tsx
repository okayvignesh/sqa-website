import { Search, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { allTags, blogPosts, categories } from '../utils/blogData';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const BlogPage = () => {
  useScrollAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('');

  // Filter blog posts based on search and filters
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #09152f 0%, #0f172a 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            SimplifyQA
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-on-scroll animate-delay-200">
            Insights, best practices, and innovations in software testing and quality assurance
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-on-scroll animate-delay-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTag('');
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedTag('');
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-6 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400 mr-2">Popular Tags:</span>
            {allTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(selectedTag === tag ? '' : tag);
                  setSelectedCategory('All');
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500'
                    : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTag && (
              <button
                onClick={() => setSelectedTag('')}
                className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500 hover:bg-red-500/30"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && !searchQuery && !selectedTag && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <BlogCard post={featuredPost} featured={true} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-2">No posts found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory !== 'All'
                    ? `${selectedCategory} Articles`
                    : selectedTag
                    ? `Posts tagged with "${selectedTag}"`
                    : 'Latest Articles'}
                </h2>
                <p className="text-gray-400">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`animate-on-scroll ${
                      index % 3 === 1 ? 'animate-delay-200' : index % 3 === 2 ? 'animate-delay-300' : ''
                    }`}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #09152f 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-on-scroll">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-on-scroll animate-delay-200">
            Join thousands of teams using SimplifyQA to deliver quality software faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animate-delay-300">
            <button
              onClick={() => window.open('https://app.simplifyqa.ai/signup', '_blank')}
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-cyan-500/50"
              style={{ background: '#26c8ef', color: '#000' }}
            >
              Start Free Trial
            </button>
            <button
              onClick={() => (window.location.href = '/request-demo')}
              className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all"
              style={{ borderColor: '#26c8ef', color: '#26c8ef' }}
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
