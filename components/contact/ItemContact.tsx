type ItemContactProps = {
  text: string | React.ReactNode;
  error?: string | React.ReactNode;
  placeholder: string;
};

const ItemContact = ({ text, error, placeholder }: ItemContactProps) => {
  return (
    <div>
      <label className="text-xs">{placeholder}</label>
      <div className="input">
        <div className="flex text-lg">{text}</div>
      </div>
      {error}
    </div>
  );
};

export default ItemContact;
