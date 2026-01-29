import { ArrowLeft, Calendar, Clock } from 'lucide-react';
// import { Tag } from 'lucide-react'; // Commented out - will add later
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { getBlogPostBySlug, getRelatedPosts } from '../utils/blogData';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const BlogDetailPage = () => {
  useScrollAnimations();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all"
            style={{ background: '#26c8ef', color: '#000' }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id);

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </button>
      </div>

      {/* Hero Section */}
      <article className="max-w-5xl mx-auto px-4 pb-16">
        {/* Category Badge */}
        <div className="mb-6">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: '#26c8ef', color: '#000' }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-on-scroll">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-on-scroll animate-delay-200">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-800 animate-on-scroll animate-delay-300">
          {/* Date and Reading Time */}
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{post.publishedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden animate-on-scroll">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none mb-12 animate-on-scroll"
          style={{
            color: '#d1d5db',
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags - Commented out for later
        <div className="flex flex-wrap items-center gap-3">
          <Tag className="h-5 w-5 text-gray-400" />
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${tag}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500 border border-gray-700 transition-all"
            >
              {tag}
            </Link>
          ))}
        </div>
        */}

      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={relatedPost.id}
                  className={`animate-on-scroll ${
                    index % 3 === 1 ? 'animate-delay-200' : index % 3 === 2 ? 'animate-delay-300' : ''
                  }`}
                >
                  <BlogCard post={relatedPost} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #09152f 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-on-scroll">
            Ready to Experience SimplifyQA?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-on-scroll animate-delay-200">
            Start your free trial today and see how AI-powered testing can transform your workflow
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

      {/* Custom Styles for Blog Content */}
      <style>{`
        .prose h2 {
          color: #fff;
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }
        .prose h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #d1d5db;
        }
        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
          color: #d1d5db;
        }
        .prose strong {
          color: #26c8ef;
          font-weight: 600;
        }
        .prose a {
          color: #26c8ef;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .prose a:hover {
          color: #22d3ee;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;
