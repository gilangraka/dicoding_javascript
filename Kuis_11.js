function getUsers(isOnline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["rakakiki", "rakagalang", "rikikaka"];
      if (!isOnline) {
        reject(new Error("Tidak bisa mengambil data. Users sedang offline"));
      }
      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then((user) => console.log(user))
  .catch((err) => console.log(err.message));
