import '@fontsource/playfair-display/600.css';

const styles = {
  main: {
    textAlign: 'center',
    marginTop: '2vh',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
    fontSize: '4rem', 
    color: '#004d40',
    margin: '0',
  },
};

export default function Home() {
  return (
    <main className='flex flex-col mt-2 items-center'>
      <h1 style={styles.title}>Taiwania</h1>
      
    </main>
  );
}

