const Contact = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-md md:text-lg">{text}</span>
    </div>
  );
};

export default Contact;
