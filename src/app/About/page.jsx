// pages/about.js

import Image from 'next/image';
import styles from '@/Components/Theme5.module.css';
import StaticContent from '@/Components/StaticContent/StaticContent';
import Aboutus from '@/Components/AboutUs/Aboutus';

const Page = () => {
  const aboutContent = [
    {
      company: "Mailchimp",
      content: `
        <h1>About Mailchimp</h1>
        <p>Mailchimp is an email and marketing automation platform for growing businesses. We empower millions of customers around the world to start and grow their businesses with world-class marketing technology, award-winning customer support, and inspiring content. Mailchimp puts data-backed recommendations at the heart of your marketing, so you can find and engage customers across email, social media, landing pages, and advertising—automatically and with the power of AI. In 2021, Mailchimp was acquired by Intuit.</p>
        <h2>Founder story</h2>
        <p>More than two decades ago, Ben Chestnut and Dan Kurzius started a web design agency called the Rocket Science Group. Their focus was on big, corporate clients, but on the side, they created a delightful email marketing service for small businesses.</p>
        <p>Mailchimp was designed as an alternative to the oversized, expensive email software of the early 2000s. Founded in Atlanta in 2001, it offered small business owners access to many of the same digital marketing advantages that their much larger competitors enjoyed, powering their success and enabling them to grow.</p>
        <p>In the years that followed, Mailchimp continued to deliver results for budding entrepreneurs. But just as those original customers continued to grow, so did Mailchimp, evolving its product offerings to serve the needs of small businesses, their growing teams, and their increasingly complex marketing challenges.</p>
      `,
    },
  ];

  return (
    <div className={styles.aboutPage}>
      {aboutContent.map((content, index) => (
        <section key={index} className={styles.aboutSection}>
           <div className={styles.imageContainer}>
             
               <div className={styles.aboutHeader}>
            <h1>About</h1>
            
           
          </div>
            </div>
         
          <Aboutus/>
         
        </section>
       
      ))}
       <StaticContent/>
    </div>
  );
};

export default Page;
