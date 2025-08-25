export const projectsQuery = `
  *[_type == "project"]{
    _id,
    title,
    description,
    link,
    "src": src.asset->url,
    imageUrl
  }
`;

export const blogsQuery = `
  *[_type == "blog"]{
    _id,
    title,
    description,
    details,
    date,
    "src": src.asset->url,
    imageUrl
  }
`;
