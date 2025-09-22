import React from 'react';
import styles from './Dashboard.module.css';
import Image from 'next/image'; // Using next/image for optimized images

// --- Product Data ---
// In a real application, you would fetch this data from a database or a CMS.
const vegetables = [
  {
    name: 'Brinjal',
    description: 'Fresh, organically grown purple brinjal, perfect for a variety of culinary dishes.',
    imageUrl: '/images/brinjal.png', // Replace with your image path
    color: '#8A2BE2' // Purple accent color
  },
  {
    name: 'Chili',
    description: 'A mix of vibrant red and green chilies, ranging from mild to hot, to spice up your meals.',
    imageUrl: '/images/chilli.png', // Replace with your image path
    color: '#D22B2B' // Red accent color
  },
  {
    name: 'Okra',
    description: 'Tender and crisp lady\'s fingers, harvested at the peak of freshness.',
    imageUrl: '/images/okra.png', // Replace with your image path
    color: '#2E8B57' // Green accent color
  },
  {
    name: 'Tapioca',
    description: 'High-quality, starchy tapioca root, a versatile ingredient for both sweet and savory recipes.',
    imageUrl: '/images/tapioca.png', // Replace with your image path
    color: '#D2B48C' // Tan accent color
  },
  {
    name: 'Betel Leaves',
    description: 'Aromatic and fresh betel leaves, traditionally used and packed with flavor.',
    imageUrl: '/images/betel.png', // Replace with your image path
    color: '#3A5F0B' // Dark green accent color
  }
];

const livestock = [
  {
    name: 'Fresh Goat Milk',
    description: 'Nutritious and creamy goat milk, sourced directly from our healthy, pasture-raised goats.',
    imageUrl: '/images/goat-milk.png' // Replace with your image path
  },
  {
    name: 'Goat Meat',
    description: 'Premium quality, tender goat meat. An excellent and flavorful choice for various cuisines.',
    imageUrl: '/images/goat-meat.png' // Replace with your image path
  },
  {
    name: 'Cow Meat',
    description: 'High-grade, ethically raised cow meat, known for its rich taste and tenderness.',
    imageUrl: '/images/cow-meat.png' // Replace with your image path
  }
];


export default function Dashboard() {
  return (
    <div className={styles.pageWrapper}>
      {/* --- Header --- */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#">GreenValley Farms</a>
        </div>
        <nav className={styles.navigation}>
          <a href="#vegetables">Vegetables</a>
          <a href="#livestock">Livestock</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>From Our Farm to Your Table</h1>
            <p className={styles.heroSubtitle}>Discover the freshest, organically grown produce and ethically raised livestock products.</p>
          </div>
        </section>

        {/* --- Vegetables Section --- */}
        <section id="vegetables" className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Fresh Vegetables</h2>
          <div className={styles.productGrid}>
            {vegetables.map((veg) => (
              <div key={veg.name} className={styles.productCard}>
                <div className={styles.cardImageWrapper}>
                   {/* Use a placeholder if you don't have images yet */}
                  <div className={styles.placeholderImage} style={{ backgroundColor: veg.color }}></div>
                  <Image src={veg.imageUrl} alt={veg.name} layout="fill" objectFit="cover" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{veg.name}</h3>
                  <p className={styles.cardDescription}>{veg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Livestock Section --- */}
        <section id="livestock" className={`${styles.section} ${styles.darkSection}`}>
          <h2 className={styles.sectionTitle}>Our Livestock Products</h2>
          <div className={styles.productGrid}>
            {livestock.map((item) => (
              <div key={item.name} className={`${styles.productCard} ${styles.lightCard}`}>
                <div className={styles.cardImageWrapper}>
                  {/* Use a placeholder if you don't have images yet */}
                  <div className={styles.placeholderImage} style={{ backgroundColor: '#A9A9A9' }}></div>
                  <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>GreenValley Farms</h4>
            <p>Committed to sustainable and ethical farming practices for a healthier community.</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <p>Email: contact@greenvalley.farm</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: 123 Farm Road, Rural Town, Country</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">Instagram</a>
              {/* Add more social links as needed */}
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 GreenValley Farms. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}