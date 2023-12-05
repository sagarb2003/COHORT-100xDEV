/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result=[];
  for(let i=0;i<transactions.length;i++){
      const index=result.findIndex(item => item["category"] === transactions[i]["category"]);
      if(index !== -1){
        result[index]["totalSpent"]+=transactions[i]["price"];
      }
    else{
      let newItem = {
        "category" :transactions[i]["category"],
        "totalSpent" : transactions[i]["price"]
      };
      // newItem["category"] = transactions[i]["category"];
      // newItem["totalSpent"] = transactions[i]["price"];
      result.push(newItem);
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
