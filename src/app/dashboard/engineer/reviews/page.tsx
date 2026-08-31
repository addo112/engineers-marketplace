import { Star } from 'lucide-react';

export default function ReviewsPage() {
  const mockReviews = [
    { id: 1, client: 'Ekow Smith', project: 'Foundation Assessment', rating: 5, date: 'Oct 10, 2026', content: 'Excellent work on the foundation assessment. Very thorough and professional.' },
    { id: 2, client: 'Abena Yeboah', project: 'Structural Plans Design', rating: 5, date: 'Sep 25, 2026', content: 'Delivered the structural plans ahead of schedule. Highly recommended!' },
    { id: 3, client: 'Kofi Ansah', project: 'Site Inspection', rating: 4, date: 'Aug 14, 2026', content: 'Good technical knowledge. The report was slightly delayed but the quality was great.' },
    { id: 4, client: 'Ama Serwaa', project: 'Residential Building Consultation', rating: 5, date: 'Jul 02, 2026', content: 'Very insightful consultation. Helped us save a lot on material costs.' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Client Reviews</h1>
        <p className="text-slate-500 mt-1">See what clients are saying about your work.</p>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="text-center md:border-r border-slate-200 md:pr-8">
          <div className="text-5xl font-bold text-slate-900 mb-2">4.8</div>
          <div className="flex text-amber-400 justify-center mb-1">
            {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'fill-amber-400/30'}`} />)}
          </div>
          <p className="text-sm text-slate-500">Based on 24 reviews</p>
        </div>

        <div className="flex-1 w-full space-y-2">
          {[
            { stars: 5, count: 20, pct: 83 },
            { stars: 4, count: 3, pct: 12 },
            { stars: 3, count: 1, pct: 5 },
            { stars: 2, count: 0, pct: 0 },
            { stars: 1, count: 0, pct: 0 },
          ].map((bar) => (
            <div key={bar.stars} className="flex items-center gap-3 text-sm">
              <div className="w-12 text-slate-600 flex items-center gap-1">
                {bar.stars} <Star className="w-3 h-3 fill-slate-400 text-slate-400" />
              </div>
              <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${bar.pct}%` }}></div>
              </div>
              <div className="w-8 text-right text-slate-500">{bar.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-slate-900">{review.client}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Project: {review.project}</p>
              </div>
              <span className="text-sm text-slate-500">{review.date}</span>
            </div>
            <div className="flex text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-slate-200 text-slate-200'}`} />
              ))}
            </div>
            <p className="text-slate-700">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
