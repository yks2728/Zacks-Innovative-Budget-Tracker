// let db;

// const request = indexedDB.open("budget", 1);

// request.onupgradeneeded = function (event) {
//   const db = event.target.result;
//   db.createObjectStore("new_transaction", { autoIncrement: true });
// };

// request.onsuccess = function(event) {
//     // when db is successfully created with its object store (from onupgradedneeded event above), save reference to db in global variable
//     db = event.target.result;
  
//     // check if app is online, if yes run checkDatabase() function to send all local db data to api
//     if (navigator.onLine) {
//       uploadBudget();
//     }
// };

// request.onerror = function(event) {
//     // log error here
//     console.log(event.target.errorCode);
// };
