import '../../assets/Nov_26/styless.css';

export default function ContactUs() {
  return (
    <div className='container'>
      <h1 className='title'>Contact Us</h1>
      <p>Feel free to reach out to us with your inquiries or concerns. We're here to help!</p>
      <hr />
      
      <div className=''>
        <h3>Email:</h3>
        <p>
          <a href="mailto:info@example.com">info@example.com</a>
        </p>
        
        <h3>Phone:</h3>
        <p>+1 (555) 123-4567</p>
        
        <h3>Address:</h3>
        <p>123 Example Street, City, Country</p>
        
        <h3>Contact Form:</h3>
        <form className='formstyle'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          
          <button type="submit" className='subButton'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
