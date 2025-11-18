

export default function ProjectCard({ p }) {
return (
  
<div className="card h-100 shadow-sm">
<img src="profile.jpg" className="card-img-top" alt={p.title} />
<div className="card-body d-flex flex-column">
<h5 className="card-title">{p.title}</h5>
<p className="card-text text-muted">{p.description}</p>
<div className="mt-auto">
{p.tags && p.tags.map(tag => (
<span key={tag} className="badge bg-secondary me-1">{tag}</span>
))}
</div>
</div>
</div>
);
}