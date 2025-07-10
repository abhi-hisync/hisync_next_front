import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ResourcesCategoryPage from '../../../../components/resources/ResourcesCategoryPage';

interface CategoryResource {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: {
    id: number;
    name: string;
  };
  featured_image_url: string | null;
  published_at: string;
  read_time: number;
  view_count: number;
  share_count: number;
}

interface CategoryApiResponse {
  success: boolean;
  data: {
    resources: CategoryResource[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
    category: string;
    category_stats: {
      total_resources: number;
      total_views: number;
      avg_read_time: number;
    };
  };
}

// Map URL slugs to actual category names in database
function slugToCategory(slug: string): string {
  const categoryMap: Record<string, string> = {
    'guides-tutorials': 'Guides & Tutorials',
    'guides-&-tutorials': 'Guides & Tutorials',
    'technical-deep-dives': 'Technical Deep Dives',
    'case-studies': 'Case Studies', 
    'best-practices': 'Best Practices',
    'industry-insights': 'Industry Insights',
    'security-compliance': 'Security & Compliance',
    'security-&-compliance': 'Security & Compliance',
    'product-updates': 'Product Updates',
    'performance-optimization': 'Performance Optimization',
    'integration-guides': 'Integration Guides',
    'enterprise-solutions': 'Enterprise Solutions',
  };
  
  // If exact match found, return it
  if (categoryMap[slug.toLowerCase()]) {
    return categoryMap[slug.toLowerCase()];
  }
  
  // Otherwise, try to convert slug to title case
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function getCategoryResources(
  categorySlug: string,
  page: number = 1,
  sort: string = 'latest',
  search?: string
): Promise<CategoryApiResponse | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  const actualCategory = slugToCategory(categorySlug);
  
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      sort,
      ...(search && { search }),
    });

    const res = await fetch(`${apiUrl}/api/v1/resources/category/${encodeURIComponent(actualCategory)}?${params}`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching category resources:', error);
    // Return fallback data for static export
    return {
      success: true,
      data: {
        resources: [],
        pagination: {
          current_page: 1,
          last_page: 1,
          per_page: 10,
          total: 0,
        },
        category: actualCategory,
        category_stats: {
          total_resources: 0,
          total_views: 0,
          avg_read_time: 5,
        },
      },
    };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedCategory = decodeURIComponent(resolvedParams.category);
  const categoryData = await getCategoryResources(decodedCategory);
  
  if (!categoryData || !categoryData.success) {
    return {
      title: 'Category Not Found | HiSync Resources',
      description: 'The requested resource category could not be found.',
    };
  }

  const { category, category_stats } = categoryData.data;
  
  return {
    title: `${category} Resources | HiSync - Expert Insights & Guides`,
    description: `Explore ${category_stats.total_resources} expert resources in ${category}. Get insights, best practices, and guides from our knowledge hub.`,
    keywords: `${category.toLowerCase()}, resources, guides, best practices, insights, ${category.toLowerCase()} tutorials`,
    openGraph: {
      title: `${category} Resources | HiSync`,
      description: `Expert ${category.toLowerCase()} resources, guides, and insights.`,
      type: 'website',
      siteName: 'HiSync',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category} Resources | HiSync`,
      description: `Expert ${category.toLowerCase()} resources and insights.`,
    },
    alternates: {
      canonical: `/resources/category/${resolvedParams.category}`,
    },
  };
}

export default async function ResourcesCategoryPageRoute({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  
  const decodedCategory = decodeURIComponent(resolvedParams.category);
  // For static export, use default values instead of searchParams
  const page = 1;
  const sort = 'latest';
  const search = undefined;
  
  const categoryData = await getCategoryResources(decodedCategory, page, sort, search);
  
  if (!categoryData || !categoryData.success) {
    notFound();
  }

  // Get related categories from API response or generate some defaults
  const relatedCategories = ['Technology', 'Business', 'Design', 'Marketing']
    .filter(cat => cat.toLowerCase() !== categoryData.data.category.toLowerCase())
    .slice(0, 4);

  return (
    <ResourcesCategoryPage
      category={categoryData.data.category}
      initialResources={(categoryData.data.resources || []).map(resource => ({
        ...resource,
        content: resource.excerpt, // Use excerpt as content for listing
        is_featured: false, // Default for listing view
        is_trending: false, // Default for listing view
        published_date_formatted: new Date(resource.published_at).toLocaleDateString(),
        reading_time_text: `${resource.read_time} min read`,
        like_count: 0, // Default value
        share_count: 0, // Default value
        author: {
          id: resource.author.id,
          name: resource.author.name,
          email: 'author@example.com' // Provide default email since it's not in CategoryResource
        }
      }))}
      totalCount={categoryData.data.pagination?.total || 0}
      featuredResources={[]} // Will be fetched separately by component if needed
      relatedCategories={relatedCategories}
    />
  );
}

// Generate static params for static export
export function generateStaticParams() {
  // For static export, return predefined categories to pre-generate pages
  return [
    { category: 'guides-tutorials' },
    { category: 'technical-deep-dives' },
    { category: 'case-studies' },
    { category: 'best-practices' },
    { category: 'industry-insights' },
    { category: 'security-compliance' },
    { category: 'product-updates' },
    { category: 'performance-optimization' },
    { category: 'integration-guides' },
    { category: 'enterprise-solutions' }
  ];
}
