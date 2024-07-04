import React from 'react';
import styles from '@/Components/Theme5.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Rise of Quantum Computing.The Rise of Quantum Computing.The Rise of Quantum Computing.',
    date: '2024-04-30',
    author: "Niko",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M96z_zwEJ19F2s9uTayTpb0fg1wcUMTkdg&s',
  },
  {
    id: 2,
    title: 'How to Plan the Perfect Road Trip.',
    date: '2024-04-26',
    author: "Niko",
    image: 'https://www.flipspaces.com/uploads/images/blog_new/June-2023/blog23/list_03.jpg',
  },
  {
    id: 3,
    title: 'How 5G Will Change the World.',
    date: '2024-03-25',
    author: "Niko",
    image: 'https://thumbs.dreamstime.com/b/law-concept-mallet-legal-code-scales-justice-studio-shots-34189993.jpg',
  },
  {
    id: 4,
    title: 'The Rise of Quantum Computing.',
    date: '2024-04-30',
     author: "Niko",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M96z_zwEJ19F2s9uTayTpb0fg1wcUMTkdg&s',
  },
  {
    id: 5,
    title: 'How to Plan the Perfect Road Trip.',
    date: '2024-04-26',
     author: "Niko",
    image: 'https://www.flipspaces.com/uploads/images/blog_new/June-2023/blog23/list_03.jpg',
  },
  {
    id: 6,
    title: 'How 5G Will Change the World.',
    date: '2024-03-25',
     author: "Niko",
    image: 'https://thumbs.dreamstime.com/b/law-concept-mallet-legal-code-scales-justice-studio-shots-34189993.jpg',
  },
  {
    id: 7,
    title: 'The Rise of Quantum Computing.',
    date: '2024-04-30',
     author: "Niko",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M96z_zwEJ19F2s9uTayTpb0fg1wcUMTkdg&s',
  },
  {
    id: 8,
    title: 'How to Plan the Perfect Road Trip.',
    date: '2024-04-26',
     author: "Niko",
    image: 'https://www.flipspaces.com/uploads/images/blog_new/June-2023/blog23/list_03.jpg',
  },
  {
    id: 9,
    title: 'How 5G Will Change the World.',
    date: '2024-03-25',
     author: "Niko",
    image: 'https://thumbs.dreamstime.com/b/law-concept-mallet-legal-code-scales-justice-studio-shots-34189993.jpg',
  },
  {
    id: 10,
    title: 'The Rise of Quantum Computing.',
    date: '2024-04-30',
     author: "Niko",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M96z_zwEJ19F2s9uTayTpb0fg1wcUMTkdg&s',
  },
  {
    id: 11,
    title: 'How to Plan the Perfect Road Trip.',
    date: '2024-04-26',
     author: "Niko",
    image: 'https://www.flipspaces.com/uploads/images/blog_new/June-2023/blog23/list_03.jpg',
  },
  {
    id: 12,
    title: 'How 5G Will Change the World.',
    date: '2024-03-25',
    author: "Niko",
    image: 'https://thumbs.dreamstime.com/b/law-concept-mallet-legal-code-scales-justice-studio-shots-34189993.jpg',
  },
];

const Page = () => {
  return (
    <div className={styles.BlogpageContainer_main}>
      <header className={styles.header}>
        <h1>Blog</h1>
      </header>
    <div className={styles.BlogpageContainer}>
      
      <div className={styles.container}>
        {blogPosts.map(post => (
          <div key={post.id} className={styles.card}>
            <div className={styles.imagecontainer}>
            <img src={post.image} alt={post.title} className={styles.image} />
            </div>
            <div className={styles.content1}>
              <h2>{post.title}</h2>
              <p>~{post.author}</p>
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
export default Page;