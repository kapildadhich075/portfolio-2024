import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

function MediumArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const MEDIUM_USERNAME = '@kapildadhich075';

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  const fetchMediumArticles = async () => {
    try {
      setLoading(true);
      
      // Using RSS2JSON service to convert Medium RSS to JSON
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`
      );
      
      const data = await response.json();
      
      if (data.status === 'ok') {
        // Extract and clean the articles
        const cleanedArticles = data.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          thumbnail: item.thumbnail || extractFirstImage(item.description),
          description: extractExcerpt(item.description),
          categories: item.categories || []
        }));
        
        setArticles(cleanedArticles);
      } else {
        setError('Failed to fetch articles');
      }
    } catch (err) {
      setError('Error loading articles');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Extract first image from article content
  const extractFirstImage = (html) => {
    const imgMatch = html.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  // Extract plain text excerpt from HTML
  const extractExcerpt = (html) => {
    const text = html.replace(/<[^>]*>/g, '');
    return text.substring(0, 150) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <Loader2 className="animate-spin mx-auto mb-4" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <button 
            onClick={fetchMediumArticles}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 ">
          <h1 className="text-7xl md:text-9xl font-[anzo4]  text-black  ">
            Articles
          </h1>
          <p className="text-gray-600 text-lg">
            My thoughts and insights on Medium
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <article className="h-full bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-black">
                {/* Thumbnail */}
                {article.thumbnail && (
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <p className="text-sm text-gray-500 mb-3">
                    {article.pubDate}
                  </p>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:underline">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.description}
                  </p>

                  {/* Categories */}
                  {article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.categories.slice(0, 3).map((category, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More */}
                  <div className="mt-4 flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-xl">No articles found</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default MediumArticles;