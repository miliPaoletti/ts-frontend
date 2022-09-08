import DestinationContent from "components/content/DestinationContent";
import Template from "components/layout/Template";

const Destination = () => {
  return (
    <Template
      content={<DestinationContent />}
      title={` - Turismo Serrano`}
      // ${title}
    />
  );
};

export default Destination;
