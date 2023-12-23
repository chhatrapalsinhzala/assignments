/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = new Array()
  let category_map = {}
  for(let i =0 ; i < transactions.length ; i++) {
    category_map[transactions[i]["category"]] = (category_map[transactions[i]["category"]] || 0) + transactions[i]["price"] ;
  }
  const keys = Object.keys(category_map)
  for(let i =0 ; i < keys.length ; i++) {
    result.push({category : keys[i], totalSpent : category_map[keys[i]]}) ;
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
// transactions = [{
// 				id: 1,
// 				timestamp: 1656076800000,
// 				price: 10,
// 				category: 'Food',
// 				itemName: 'Pizza',
// 			},
// 			{
// 				id: 2,
// 				timestamp: 1656259600000,
// 				price: 20,
// 				category: 'Food',
// 				itemName: 'Burger',
// 			},
// 			{
// 				id: 3,
// 				timestamp: 1656019200000,
// 				price: 15,
// 				category: 'Clothing',
// 				itemName: 'T-Shirt',
// 			},
// 			{
// 				id: 4,
// 				timestamp: 1656364800000,
// 				price: 30,
// 				category: 'Electronics',
// 				itemName: 'Headphones',
// 			},
// 			{
// 				id: 5,
// 				timestamp: 1656105600000,
// 				price: 25,
// 				category: 'Clothing',
// 				itemName: 'Jeans',
// 			},]
// calculateTotalSpentByCategory(transactions)



// Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
//   and return a list of objects where each object is unique category-wise and has total price spent as its value.

// function calculateTotalSpentByCategory(transactions) {
//     const totalSpentByCategory = {};

//     transactions.forEach(transaction => {
//         const { category, price } = transaction;

//         if (category in totalSpentByCategory) {
//             totalSpentByCategory[category] += price;
//         } else {
//             totalSpentByCategory[category] = price;
//         }
//     });

//     // Convert the result into an array of objects
//     const resultArray = Object.entries(totalSpentByCategory).map(([category, totalSpent]) => ({
//         category,
//         totalSpent
//     }));

//     return resultArray;
// }

// // Example usage:
// const transactions = [
//     { category: 'Groceries', price: 50 },
//     { category: 'Clothing', price: 30 },
//     { category: 'Groceries', price: 20 },
//     { category: 'Electronics', price: 100 },
//     { category: 'Clothing', price: 50 }
// ];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);
// // Output: [ { category: 'Groceries', totalSpent: 70 }, { category: 'Clothing', totalSpent: 80 }, { category: 'Electronics', totalSpent: 100 } ]

