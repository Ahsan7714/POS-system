export const orderData = [
  {
    Platform: "UberEats",
    OrderId: "UBE123",
    Customer: "Alice",
    Contact: "+923276543212",
    Date: "2024-03-01",
    Time: "1:00 PM",
    Amount: 360, // Updated total
    Status: "Confirmed",
    deliveryAddress: "789, Main Street, Bangalore",
    PaymentMethod: "Online",
    OrderItems: [
      { item: "Chicken Biryani", quantity: 1, price: 300 },
      { item: "Cold Drink (500ml)", quantity: 1, price: 60 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "Zomato",
    OrderId: "ZOM123",
    Customer: "John Doe",
    Contact: "+923276543210",
    Date: "2024-03-01",
    Time: "12:30 PM",
    Amount: 580, // Updated total
    Status: "In Progress",
    deliveryAddress: "123, Main Street, Bangalore",
    PaymentMethod: "Card",
    OrderItems: [
      { item: "Butter Chicken", quantity: 1, price: 400 },
      { item: "Chicken Biryani", quantity: 1, price: 300 },
      { item: "Cold Drink (1 Liter)", quantity: 1, price: 120 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "Swiggy",
    OrderId: "SWI123",
    Customer: "Jane Doe",
    Contact: "+923276543211",
    Date: "2024-03-01",
    Time: "12:45 PM",
    Amount: 1050, // Updated total
    Status: "In Progress",
    deliveryAddress: "456, Main Street, Bangalore",
    PaymentMethod: "Cash",
    OrderItems: [
      { item: "Paneer Tikka", quantity: 2, price: 350 },
      { item: "Dal Makhani", quantity: 1, price: 250 },
      { item: "Cold Drink (1.5 Liter)", quantity: 1, price: 150 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "Kitchen",
    OrderId: "KIT123",
    Customer: "Nashit",
    Contact: "+923276543222",
    Date: "2024-07-15",
    Time: "12:30 PM",
    Amount: 870, // Updated total
    Status: "Confirmed",
    deliveryAddress: "234, Main Street, Bangalore",
    PaymentMethod: "Online",
    OrderItems: [
      { item: "Butter Chicken", quantity: 1, price: 400 },
      { item: "Paneer Tikka", quantity: 1, price: 350 },
      { item: "Cold Drink (1 Liter)", quantity: 1, price: 120 },
    ],
    OrderType: "Dine-In",
  },

  {
    Platform: "FoodPanda",
    OrderId: "FOO123",
    Customer: "Bob",
    Contact: "+923276543213",
    Date: "2024-03-01",
    Time: "1:15 PM",
    Amount: 600, // Updated total
    Status: "Completed",
    deliveryAddress: "012, Main Street, Bangalore",
    PaymentMethod: "Card",
    OrderItems: [
      { item: "Dal Makhani", quantity: 1, price: 250 },
      { item: "Paneer Tikka", quantity: 1, price: 350 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "FoodPanda",
    OrderId: "FOO124",
    Customer: "Ahmed",
    Contact: "+923276543214",
    Date: "2024-07-01",
    Time: "12:30 PM",
    Amount: 1220, // Updated total
    Status: "Confirmed",
    deliveryAddress: "123, Main Street, Bangalore",
    PaymentMethod: "Cash",
    OrderItems: [
      { item: "Butter Chicken", quantity: 2, price: 400 },
      { item: "Chicken Biryani", quantity: 1, price: 300 },
      { item: "Cold Drink (1 Liter)", quantity: 1, price: 120 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "UberEats",
    OrderId: "UBE124",
    Customer: "Ali",
    Contact: "+923276543215",
    Date: "2024-07-01",
    Time: "12:45 PM",
    Amount: 550, // Updated total
    Status: "Confirmed",
    deliveryAddress: "456, Main Street, Bangalore",
    PaymentMethod: "Online",
    OrderItems: [
      { item: "Dal Makhani", quantity: 1, price: 250 },
      { item: "Chicken Biryani", quantity: 1, price: 300 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "Kitchen",
    OrderId: "KIT124",
    Customer: "Tariq",
    Contact: "+923276543223",
    Date: "2024-07-15",
    Time: "12:45 PM",
    Amount: 850, // Updated total
    Status: "Completed",
    deliveryAddress: "567, Main Street, Bangalore",
    PaymentMethod: "Card",
    OrderItems: [
      { item: "Paneer Tikka", quantity: 2, price: 350 },
      { item: "Cold Drink (1.5 Liter)", quantity: 1, price: 150 },
    ],
    OrderType: "Take-Away",
  },
  {
    Platform: "Swiggy",
    OrderId: "SWI124",
    Customer: "Ayesha",
    Contact: "+923276543216",
    Date: "2024-07-01",
    Time: "1:00 PM",
    Amount: 460, // Updated total
    Status: "Confirmed",
    deliveryAddress: "789, Main Street, Bangalore",
    PaymentMethod: "Card",
    OrderItems: [
      { item: "Butter Chicken", quantity: 1, price: 400 },
      { item: "Cold Drink (500ml)", quantity: 1, price: 60 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "FoodPanda",
    OrderId: "FOO125",
    Customer: "Bilal",
    Contact: "+923276543217",
    Date: "2024-07-01",
    Time: "1:15 PM",
    Amount: 600, // Updated total
    Status: "Cancelled",
    deliveryAddress: "012, Main Street, Bangalore",
    PaymentMethod: "Cash",
    OrderItems: [
      { item: "Paneer Tikka", quantity: 1, price: 350 },
      { item: "Dal Makhani", quantity: 1, price: 250 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "Kitchen",
    OrderId: "KIT125",
    Customer: "Hassan",
    Contact: "+923276543224",
    Date: "2024-07-15",
    Time: "1:00 PM",
    Amount: 950, // Updated total
    Status: "Cancelled",
    deliveryAddress: "890, Main Street, Bangalore",
    PaymentMethod: "Cash",
    OrderItems: [
      { item: "Butter Chicken", quantity: 2, price: 400 },
      { item: "Paneer Tikka", quantity: 1, price: 350 },
    ],
    OrderType: "Dine-In",
  },
  {
    Platform: "Swiggy",
    OrderId: "SWI125",
    Customer: "Saim",
    Contact: "+923276543218",
    Date: "2024-07-01",
    Time: "12:30 PM",
    Amount: 360, // Updated total
    Status: "Cancelled",
    deliveryAddress: "123, Main Street, Bangalore",
    PaymentMethod: "Online",
    OrderItems: [
      { item: "Chicken Biryani", quantity: 1, price: 300 },
      { item: "Cold Drink (500ml)", quantity: 1, price: 60 },
    ],
    OrderType: "Dilevery",
  },
  {
    Platform: "Swiggy",
    OrderId: "SWI127",
    Customer: "Mike",
    Contact: "+923276543219",
    Date: "2024-07-01",
    Time: "12:45 PM",
    Amount: 950, // Updated total
    Status: "Confirmed",
    deliveryAddress: "456, Main Street, Bangalore",
    PaymentMethod: "Card",
    OrderItems: [
      { item: "Paneer Tikka", quantity: 2, price: 350 },
      { item: "Dal Makhani", quantity: 1, price: 250 },
    ],
    OrderType: "Dilevery",
  },
];
