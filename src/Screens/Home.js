import { Image, ScrollView, Text, View } from "react-native";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 2,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 3,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
    {
      id: 4,
      name: "Plug",
      image:
        "https://www.iqsdirectory.com/articles/power-cord/electrical-plugs/europlug.jpg",
      quantity: 24,
      buyPrice: 45,
      sellPrice: 55,
    },
  ];

  return (
    <ScrollView className="bg-[#FFFFFF]">
      <View className="px-6 pt-8">
        <Text className="font-bold text-2xl">Hardware</Text>
        <Text className="font-bold text-2xl">&</Text>
        <Text className="font-bold text-2xl">Electronic</Text>
      </View>
      <View className="mx-2">
        {data.map((item) => (
          <View className="flex flex-row items-center p-2 my-2 bg-[#F9775B] rounded-md" key={item.id}>
            <View className="">
              <Image
                className="h-12 w-12"
                source={{
                  uri: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-03/The%20New%20Shop.jpg",
                }}
              />
            </View>
            <View className="pl-2">
              <Text className="font-bold text-white"> Product Name: {item.name}</Text>
              <View className="flex flex-row gap-2">
                <Text className="font-bold text-white"> Buy Price: {item.buyPrice}</Text>
                <Text className="font-bold text-white"> Sell Price: {item.sellPrice}</Text>
              </View>
              <Text className="font-bold text-white"> Stock: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
