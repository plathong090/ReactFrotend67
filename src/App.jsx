import Contact from './assets/Contact.jsx';
import Hello from './assets/hello.jsx';
import Counter from './assets/Counter.jsx';

function App() {
  const helloData = [
    { name: 'Biw', message: 'Hi there!' },
    { name: 'Nino', message: 'Hello' }
  ];

  return (
    <>
      <div>
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message} />
        ))}

        <center>
          <Contact email="test123@gmail.com" phone="0901234567" />
        </center>

        {/* เพิ่ม Counter.jsx ลงไป */}
        <center><Counter /></center>
      </div>
    </>
  );
}

export default App;
