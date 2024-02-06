import Text from "@/components/atoms/Text";
const loading = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full z-50 bg-medium-gray">
      <Text>Loading...</Text>
    </div>
  );
};

export default loading;
